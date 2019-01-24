from objects_findAI import Algorithms

# loop about, asking the user questions and suggesting AI algorithms

def getOption():
    option = ''
    while not option.isdigit():
        option = raw_input('Type a # and hit enter to choose an option:')
    print 'Hooray! You chose option ' + str(option)
    return option

def loop():
    #   Display best algorithms
    print 'Suggested algorithms:'
    for algo in algos.scores.keys():
        print algo
    #   Display current factors
    print 'Based on the following factors:'
    #   Display suggested questions
    print 'Here are 4 potential new factors:'
    #   Choose a new factor
    option = getOption()

if __name__ == '__main__':
    # Welcome message
    print '\nWelcome to the functional ontology tool\n'

    # Initializations
    algos = Algorithms()

    while(1):
        loop()
