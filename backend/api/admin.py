from django.contrib import admin
from .models import User
from .models import Appointment
from .models import CompletedAppointment

# Register your models here.fr
admin.site.register(User)
admin.site.register(Appointment)
admin.site.register(CompletedAppointment)