from django.urls import path
# from . import views
# from .router import router_post

from .views import ServicioView, TicketsView
urlpatterns = [
    path('post/',ServicioView.as_view(),name="Servicios"),
    path('postTicket',TicketsView.as_view(), name="Tickets")
]
