from django.shortcuts import render , redirect
from django.http import HttpResponse , JsonResponse, HttpResponseNotFound
from django.views.decorators.http import require_http_methods
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def home_view(request):
    return HttpResponse('This is a home page!!')

def simple_view(request):
    return HttpResponse('Hello, from the first task')

def template_view(request):
    return render(request, 'random.html')

def dynamic_view(request, name):
    return HttpResponse(f"Hello , {name}")

def json_view(request):
    return JsonResponse({'status': 'success', 'message': 'JSON response'})

@csrf_exempt
@require_http_methods(["POST"])
def post_only_view(request):
    return HttpResponse("Only post allowed!")

def error_view(request):
    return HttpResponseNotFound("THIS PAGE DOES NOT EXIST !")

# CLASS BASED VIEW

class HelloCBV(View):
    def get(self, request):
        return HttpResponse("Hello from the class based view")

class TemplateCBV(View):
    def get(self, request):
        return render(request, 'random.html')

@method_decorator(csrf_exempt, name='dispatch')
@method_decorator(require_http_methods(["POST"]) , name='dispatch')
class PostonlyCBV(View):
    def post(self, request):
        return HttpResponse("Post from cbv")

# Handeling different HTTP methos in a FBV

@csrf_exempt
def method_view(request):
    if request.method == 'GET':
        return HttpResponse("Get requested")
    elif request.method == 'POST':
        return HttpResponse("POST request")
    elif request.method == 'PUT':
        return HttpResponse("PUT request")
    elif request.method == 'PATCH':
        return HttpResponse("PATCH request")
    elif request.method == 'DELETE':
        return HttpResponse("DELETE request")
    else:
        return HttpResponse("Unknown method")

# Handeling different HTTP methods in a CBV

@method_decorator(csrf_exempt, name='dispatch')
class MethodCBV(View):
    def get(self, request):
        return HttpResponse("GET from CBV")
    
    def post(self, request):
        return HttpResponse("POST from CBV")

    def put(self, request):
        return HttpResponse("PUT from CBV")

    def patch(self, request):
        return HttpResponse("PATCH from CBV")

    def delete(self, request):
        return HttpResponse("DELETE from CBV")
