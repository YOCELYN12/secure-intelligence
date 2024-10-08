from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import status
from .serializers import PostSerializer
from .models import Usuario




# Create your views here.
class RegistroView(APIView):
    queryset = Usuario.objects.all()
    serializer_class = PostSerializer 
    
    def post (self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Usuario ya existe'}, status=status.HTTP_400_BAD_REQUEST)
        
    
        nuevo_usuario = User.objects.create_user(username=username, password=password)
        return Response ({'success': 'Usuario creado'}, status=status.HTTP_201_CREATED)