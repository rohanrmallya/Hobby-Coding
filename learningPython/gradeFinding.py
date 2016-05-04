#Take t1 and t2 marks, attendence and project marks and store them in a variable test.
#Test will be 40% of 100%.
#Take ESA marks and store it in a variable ESA.
#ESA Should be 60% of the 100%.
def countResult():
    t1 = int(input("Enter your T1 Marks "))
    t2 = int(input("Enter your T2 marks "))
    proj = int(input("Marks expected for project "))
    att = int(input("Marks expected for attendence "))
    fin = int(input("Marks for finals "))
    isa = 40*(t1+t2+proj+att)/100
    isaFin = 100*isa/90
    esa = 60*fin/100
    tot = isaFin+esa
    global total
    total.append(tot)
    print("Your total marks are "+ str(tot))

    if tot in range(85,101):
        print("You got an S grade")
    elif tot in range(75,85):
        print("You got A grade")
    elif tot in range(65,75):
        print("You got a B grade")
    elif tot in range(55,65):
        print("You got a C grade")
    elif tot in range(45,55):
        print("You got a D grade")
    elif tot in range(35,45):
        print("You got an E grade")
    else:
        print("You got an F grade")

def kitnaScore():
    t1 = int(input("Enter your T1 Marks "))
    t2 = int(input("Enter your T2 marks "))
    proj = int(input("Marks expected for project "))
    att = int(input("Marks expected for attendence "))
    isaInit = 40*(t1+t2+proj+att)/100
    isa = 100*isaInit/90
    expGrade = str(input("Enter the grade you are expecting"))
    if(expGrade == "s" or expGrade == "S"):
        esa = 85-isa
        fin = esa*100/60
        print("You have to get "+str(fin)+" marks in ESA")
    if(expGrade == "a" or expGrade == "A"):
        esa = 75-isa
        fin = esa*100/60
        print("You have to get "+str(fin)+" marks in ESA")
    if(expGrade == "b" or expGrade == "B"):
        esa = 65-isa
        fin = esa*100/60
        print("You have to get "+str(fin)+" marks in ESA")
    if(expGrade == "c" or expGrade == "C"):
        esa = 55-isa
        fin = esa*100/60
        print("You have to get "+str(fin)+" marks in ESA")
    if(expGrade == "d" or expGrade == "D"):
        esa = 45-isa
        fin = esa*100/60
        print("You have to get "+str(fin)+" marks in ESA")
    if(expGrade == "e" or expGrade == "E"):
        esa = 35-isa
        fin = esa*100/60
        print("You have to get "+str(fin)+" marks in ESA")
    if(expGrade == "f" or expGrade == "F"):
        esa = 34-isa
        fin = esa*100/60
        print("You have to get "+str(fin)+" marks in ESA")
    
    
opt = str(input("Do you want to know how much you should score to get which grade? (Y/N)"))
while(opt == "Y"):
    kitnaScore()
    opt = str(input("Do you want to repeat this?"))

number = int(input("Enter the number of subjects "))
for i in range(0,number):
    subName = str(input("Enter the name of the subject "))
    print(subName)
    countResult()
  
