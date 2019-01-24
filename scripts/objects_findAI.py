class Algorithms():
    def __init__(self):
        self.algorithms = {'RRT'}
        self.scores = dict()
        for algo in self.algorithms:
            self.scores[algo] = 0

class Factors():
    def __init__(self):
        self.outputs = {"I'd like to make a plan",
                        "I'd like to categorize some data",
                        "I'd like to predict a value",
                        "I'd like to predict a category"}
        self.inputs  = :"I have image data",
                        "I have text data",
                        "I have 

