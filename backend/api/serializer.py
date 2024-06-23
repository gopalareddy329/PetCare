# myapp/serializers.py
from rest_framework import serializers
from .models import User
from .models import Appointment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'name']




class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'user', 'timing', 'date']
