import enum
import os
_basedir = os.path.abspath(os.path.dirname(__file__))


class Classifier(enum.Enum):
    MODEL_PATH = os.path.join(_basedir, 'app/tf/retrained_graph.pb')
    LABEL_PATH = os.path.join(_basedir, 'app/tf/retrained_labels.txt')
