import json
import os
import re
print("!WEL COME TO SIGN UP! ")
file=os.path.exists("signup.json")
print(file)
if file==False:
    l=[]
    with open("signup.json","a")as f:
        a=json.dump(l,f,indent=4)
        # print(a)
user=input("what you want to login or signup:-")
if user=="signup":
        fname=input("enter the firstNAME:-")
        sname=input("enter the lastNAME:-")
        t=open("signup.json","r")
        n2=t.read()
        # print(n2)
        if fname not in n2:
            print("create a strong password mix of letter number and symbols")
            def pasw():
                p=input("enter the strong password:=")
                if (re.search("[a-z A-Z]",p)and (re.search("[0-9]",p))and (re.search("[@#$&]",p))):
                    if len(p)>=8:
                        con_p=input("Enter the confirm password:")
                        if p==con_p:
                            print("coorect password")
                            bod=(input("enter the birth date:-"))
                            emali=input("enter the email ID:-")
                            g=input("enter the gender male or female:-")
                            print(fname,"signup is succesfully")
                            dic={'name':fname,"Password":p,"DOB":bod,"Gender":g,"gmail":emali}
                            with open("signup.json","r")as f:
                                data=json.load(f)
                            data.append(dic)
                            with open("signup.json","w") as f:
                                json.dump(data,f,indent=4)
                        else:
                            print("incrroct password")
                            pasw()
                    else:
                        print("len is wrong")
                        pasw()
                else:
                    print("check mix of letter number and symbols")
                    pasw()
            pasw()
        else:
            print("Name is already their")
elif user=="login":
    fn=input("enter name")
    sn=input("enter password")
    with open("signup.json","r")as f:
        d=json.load(f)
        print(d)
        for i in range(len(d)):
            if d[i]["name"]==fn:
                if d[i]["Password"]==sn:
                    print("Login successfully done")
                    print("your name is",d[i]["name"],"\n")
                    print("and your data is","\n")
                    for x,y in d[i].items():
                        print(x,"=",y)
                else:
                    print("incorrect password")
                    break