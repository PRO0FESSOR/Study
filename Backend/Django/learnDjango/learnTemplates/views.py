from django.shortcuts import render
from datetime import datetime
# Create your views here.

def frontend(request):
    age = 19
    d = datetime.now()
    items = ['python','c++','java']
    context = {"author": "Professor", "title": "Home Page","is_adult":age>=18,"item":items,"dt":d}
    return render(request,'child.html',context)
