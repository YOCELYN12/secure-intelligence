from django.urls import path
# from . import views
# from .router import router_post

from .views import DeleteTicket, ServicioView, TicketsView, UpdateTicket
urlpatterns = [
    path('post/',ServicioView.as_view(),name="Servicios"),
    path('postTicket',TicketsView.as_view(), name="Tickets"),
    path('DeleteTicket/<int:ID_Tickets>',DeleteTicket.as_view(), name="Tickets"),
    path('UpdateTicket/<int:ID_Tickets>',UpdateTicket.as_view(), name="Tickets"),
]
