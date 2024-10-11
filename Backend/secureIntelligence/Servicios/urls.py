from django.urls import path
# from . import views
# from .router import router_post
from .views import ServicioView
urlpatterns = [
    path('post/',ServicioView.as_view(),name="Servicios")
]
