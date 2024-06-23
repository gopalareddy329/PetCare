
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from .models import User 
from django.views.decorators.csrf import csrf_exempt
from .serializer import UserSerializer,AppointmentSerializer
from .token import MyTokenObtainPairSerializer
from .models import Appointment
from datetime import datetime,timezone
from .models import Appointment

@api_view(['POST'])
@permission_classes([AllowAny])
@csrf_exempt
def register(request):
    username = request.data.get('username_or_email')
    password = request.data.get('password')
    if not username or not password:
        return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)
    name=request.data.get("name") if request.data.get("name") !=None else  username.split("@")[0] if '@' in username else username
    email=request.data.get("email") if request.data.get("email") !=None else  username if '@' in username else '' 
    

    user, created = User.objects.get_or_create(username=username,email=email,name=name)
    if created:
        user.set_password(password)
        user.save()
        serializer=MyTokenObtainPairSerializer(data={"username":username,"email":email,"name":name,"password":password})
        serializer.is_valid(raise_exception=True)
        

        return Response({'refresh': str(serializer.validated_data["refresh"]),'access':serializer.validated_data['access']}, status=status.HTTP_201_CREATED)
    else:
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)





@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_details(request):
    print(request.headers)
    print(request.auth)
    user = request.user
    serializer = UserSerializer(request.user)
    return Response(serializer.data)



@api_view(['POST'])
@permission_classes([AllowAny])
def book_appointment(request):
    user=User.objects.get(username="srm")
    request.data["user"]=user.id
    serializer=AppointmentSerializer(data=request.data)
    if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def check_appointment(request):
    date=request.data.get("date")
    try:
        
        appointments=Appointment.objects.filter(date=date)
        
        serialized_appointments = [{'booking': appointment.timing.strftime("%I:%M %p")} for appointment in appointments]
        return Response({'booking':serialized_appointments}, status=status.HTTP_200_OK) 
    except:
        return Response({'error': 'Invalid date'}, status=status.HTTP_400_BAD_REQUEST)




    