# from django.shortcuts import render
from rest_framework.views import APIView
# from rest_framework.response import Response
from .serializers import ListarCrearSerializer
from .models import Tipo_servicio
from rest_framework import generics
from .models import Tickets
from .serializers import TicketsSerializer
from rest_framework.generics import DestroyAPIView
# from rest_framework.permissions import IsAuthenticated

# Create your views here.
class ServicioView(generics.ListCreateAPIView):
    queryset = Tipo_servicio.objects.all()
    serializer_class = ListarCrearSerializer
    # permission_classes = [IsAuthenticated]
    
    
    
class TicketsView(generics.ListCreateAPIView):
    queryset = Tickets.objects.all()
    serializer_class = TicketsSerializer
    
class DeleteTicket(DestroyAPIView):
    queryset = Tickets.objects.all()
    serializer_class = TicketsSerializer
    lookup_field = 'ID_Tickets'
    
    
    

        
        
    
    
    

        
        
   