from django.urls import path
# from . import views
# from .router import router_post

from .views import  DeleteTicket, ServicioView, TicketsView, UpdateTicket
urlpatterns = [
    path('postServicio/',ServicioView.as_view(),name="Servicios"),  #URL para los tipos de servicios
    path('postTicket/',TicketsView.as_view(), name="Tickets"),  #URL para los  tickets
    path('DeleteTicket/<int:ID_Tickets>',DeleteTicket.as_view(), name="Tickets"), #URL para eliminar los tickets
    path('UpdateTicket/<int:ID_Tickets>',UpdateTicket.as_view(), name="Tickets"), #URL para actualizar los tickets 
    # path('servicio/busqueda/<str:Nombre>',BarraBusquedaView.as_view(), name="Busqueda"),
    ]
