from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

from User.models import Usere

# Create your views here.
class RegistroView(APIView):
    def post (self,request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        if User.objects.filter(username=username).exists():
            return Response({'error': "Usuario ya existia"}, status=status.HTTP_400_BAD_REQUEST)
        else:    
            nuevo_usuario = User.objects.create(username=username, email=email ,password=password)
            Usere.objects.create(user=nuevo_usuario)
            return Response ({'success': 'Usuario creado'}, status=status.HTTP_201_CREATED)
        
      

class RegistroAdminView(APIView):
    def post (self,request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        if User.objects.filter(username=username).exists():
            return Response({'error': "Usuario ya existia"}, status=status.HTTP_400_BAD_REQUEST)
        else:    
            nuevo_usuario = User.objects.create_superuser(username=username, email=email ,password=password)
            return Response ({'success': 'Usuario creado'}, status=status.HTTP_201_CREATED)
        
class LoginView(APIView):
    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
    
        usuario = User.objects.filter(username=username).first()
        
        if usuario and usuario.password==password:
            refresh = RefreshToken.for_user(usuario)
            return Response({'success': 'Usuario autenticado','idUsuario':usuario.id,'super':{usuario.is_superuser},'token':str(refresh.access_token)}, status=status.HTTP_200_OK)
        else:   
            return Response({'error': f'Credenciales inválidas {usuario}'}, status=status.HTTP_400_BAD_REQUEST)
            
