import argparse
import sys
import time

import numpy as np
import tensorflow as tf
import requests


def load_graph(model_file):
    graph = tf.Graph()
    graph_def = tf.GraphDef()

    with open(model_file, "rb") as f:
        graph_def.ParseFromString(f.read())
    with graph.as_default():
        tf.import_graph_def(graph_def)

    return graph

def read_tensor_from_url(url, input_height=299, input_width=299, input_mean=0, input_std=255):
    content = requests.get(url).content

def read_tensor_from_image_file(image_location, isUrl=False, input_height=299, input_width=299,
                                input_mean=0, input_std=255):
    input_name = "file_reader"
    output_name = "normalized"
    content = requests.get(image_location).content if isUrl else tf.read_file(image_location, input_name)

    if image_location.endswith(".png"):
        image_reader = tf.image.decode_png(content, channels=3,
                                           name='png_reader')
    elif image_location.endswith(".gif"):
        image_reader = tf.squeeze(tf.image.decode_gif(content,
                                                      name='gif_reader'))
    elif image_location.endswith(".bmp"):
        image_reader = tf.image.decode_bmp(content, name='bmp_reader')
    else:
        image_reader = tf.image.decode_jpeg(content, channels=3,
                                            name='jpeg_reader')
    float_caster = tf.cast(image_reader, tf.float32)
    dims_expander = tf.expand_dims(float_caster, 0)
    resized = tf.image.resize_bilinear(
        dims_expander, [input_height, input_width])
    normalized = tf.divide(tf.subtract(resized, [input_mean]), [input_std])
    sess = tf.Session()
    result = sess.run(normalized)

    return result


def load_labels(label_file):
    label = []
    proto_as_ascii_lines = tf.gfile.GFile(label_file).readlines()
    for l in proto_as_ascii_lines:
        label.append(l.rstrip())
    return label


class FoodClassifier:
    def __init__(self, model_path, label_path):
        self.model_file = model_path
        self.label_file = label_path

    def classify(self, image_path, isUrl=False, input_height=224, input_width = 224, input_mean = 128, input_std = 128, input_layer = "input", output_layer = "final_result" ):
        graph = load_graph(self.model_file)
        t = read_tensor_from_image_file(image_path,
            isUrl=isUrl,
            input_height=input_height,
            input_width=input_width,
            input_mean=input_mean,
            input_std=input_std)
        input_name = "import/" + input_layer
        output_name = "import/" + output_layer
        input_operation = graph.get_operation_by_name(input_name);
        output_operation = graph.get_operation_by_name(output_name);
        with tf.Session(graph=graph) as sess:
            start = time.time()
            results = sess.run(output_operation.outputs[0],
                                {input_operation.outputs[0]: t})
            end=time.time()
            results = np.squeeze(results)

        top_k = results.argsort()[-5:][::-1]
        labels = load_labels(self.label_file)
        # template = "{} (score={:0.5f})"
        output = []
        for i in top_k:
            # print(template.format(labels[i], results[i]))
            # output.append(template.format(labels[i], results[i]))
            entry = {'prediction': labels[i], 'score': "{:0.5f}".format(results[i])}
            output.append(entry)
        return output
