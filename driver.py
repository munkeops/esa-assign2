# importing the requests library 
import requests
from pprint import pprint 
import json


def auth(username):
    URL = "http://localhost:4000/rest/v1/Users/"+username
    r = requests.get(url = URL)
    data=r.json()
    #data=json.load(data)

    print(type(data))
    if not bool(data):
        return 0 #dict is empty
    else:
        return 1
  

def quantityOf(productId):
    URL = "http://localhost:4000/rest/v1/product/"+productId
    r = requests.get(url = URL)
    data=r.json()
    #data=json.load(data)
    if not bool(data):
        print("product not found")
        return 0 #dict is empty
    else:
        if(data[0]['availableQuantity']>0):
            return data[0]['availableQuantity']
        else:
            print("product is currently unavailable")
            return 0
    pprint(data)

def updateProducts(productId,quant):
    URL = "http://localhost:4000/rest/v1/product/"+productId
    r=requests.get(url=URL)
    data=r.json()
    pprint(data[0])
    q=data[0]['availableQuantity']#=data["quantity"]+quant
    #a=data["amount"]#=data["quantity"]*amt
    dat={
        "availableQuantity":q-quant,
    }
    data[0].update(dat)
    del data[0]['_id']
    del data[0]['__v']
    # pprint(data[0])
    r=requests.put(url=URL,json=data[0])
    r=requests.get(url=URL)
    data=r.json()
    pprint(data[0])


def addtocart(username,productId,quant):
    if(auth(username)<1):
        return
    avqaunt=quantityOf(productId)
    if(avqaunt<1):
        return
    
    if(quant>avqaunt):
        print("only "+avqaunt+" available, adding all to cart")
        quant=avqaunt

    URL="http://localhost:4000/rest/v1/product/"+productId
    r=requests.get(url=URL)
    data=r.json()
    pprint(data)
    productName=data[0]["productName"]
    price=data[0]["price"]

    URL="http://localhost:4000/rest/v1/users/"+username+"/cart/"+productId
    r=requests.get(url=URL)
    data=r.json()
    # pprint(data[0])
    if not bool(data):
        print("cart-empty")

        data=[{
            "productId":productId,
            "username":username,
            "productName":productName,
            "quantity":quant,
            "amount":price
        }]
        r=requests.post(url=URL,json=data[0])

    else:
        q=data[0]['quantity']#=data["quantity"]+quant
        #a=data["amount"]#=data["quantity"]*amt
        dat={
            "quantity":quant+q,
            "amount":(quant+q)*price,
        }
        data[0].update(dat)
        del data[0]['_id']
        del data[0]['__v']

        #print(data)
    
        r=requests.put(url=URL,json=data[0])
    r=requests.get(url=URL)
    data=r.json()
    pprint(data)
    print("\nupdating products\n")
    updateProducts(productId,quant)




def viewcart(username,):
    if(auth(username)<1):
        return

    URL="http://localhost:4000/rest/v1/users/"+username+"/cart"
    r=requests.get(url=URL)
    data=r.json()
    print("\n"+username+"'s CART\n")
    pprint(data)



    

addtocart("rohan9025","1",1)
addtocart("rohan9025","2",1)
viewcart("rohan9025")






