from django.contrib import admin
from django.urls import include, path
# from Backend.secureIntelligence.Servicios.views import GetView
from User.views import RegistroAdminView, RegistroView,LoginView
from rest_framework.routers import DefaultRouter


router_post = DefaultRouter()


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/registro', RegistroView.as_view()), 
    path('api/login', LoginView.as_view()),
    path('api/RegistroAdmin', RegistroAdminView.as_view()),
    path('api/',include("Servicios.urls")),
   
]

