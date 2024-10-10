from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
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
        email = request.data.get('email')
        password = request.data.get('password')
        
        if Usuario.objects.filter(username=username).exists():
            return Response({'error': 'Usuario ya existe'}, status=status.HTTP_400_BAD_REQUEST)
        
        
    
        nuevo_usuario = Usuario.objects.create(username=username, email=email ,password=password)
        return Response ({'success': 'Usuario creado'}, status=status.HTTP_201_CREATED)
    
    

class RegistroView(APIView):
    def post(self,request):
      username = request.data.get('username')
      password = request.data.get("password")
            
    
    
    
    
    
    
    
    
    
    
    
# class LoginView(APIView):
#     def post (self, request):
#         username = request.data.get('username')
#         password = request.data.get('password')
        
#         usuario = authenticate(username=username, password=password)
        
#         if usuario is not None:
#             token, created = Token.objects.get_or_create(user=usuario)
#             return Response({'success': 'Usuario autenticado', 'token': token.key,'sup':usuario.is_superuser}, status=status.HTTP_200_OK)
#         else:
#             return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)
        
