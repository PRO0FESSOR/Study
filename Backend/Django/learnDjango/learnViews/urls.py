from django.urls import path
from . import views

urlpatterns = [
    path('',views.home_view , name='home'),

    # function based views
    path('simpleview/',views.simple_view,name='simple_view'),
    path('template/',views.template_view,name='template'),
    path('hello/<str:name>/',views.dynamic_view, name='hello user'),
    path('json/', views.json_view, name='json_response'),
    path('postonly/', views.post_only_view, name='post_only'),

    # class based views
    path('cbv/',views.HelloCBV.as_view(),name='hello cbv'),
    path('cbvtemplate/', views.TemplateCBV.as_view(), name='cbv_template'),
    path('cbvpost/', views.PostonlyCBV.as_view(), name='cbv_post'),

    #Error view
    path('404/', views.error_view, name='not_found'),

    #method matching
    path('method/',views.method_view, name='method'),
    path('methodCBV/',views.MethodCBV.as_view(), name='cbv_method')
]


