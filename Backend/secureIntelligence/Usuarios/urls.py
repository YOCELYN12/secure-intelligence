from django.urls import path, include 
from . import views
from .router import router_post

urlpatterns = [
    path('post/', include(router_post.urls))
]

