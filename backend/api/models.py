
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext as _
from django.db import models

class User(AbstractUser):
    name=models.CharField(_("Name of User"), blank=True, max_length=255)
    pass


class CompletedAppointment(models.Model):
    user = models.CharField(max_length=255)
    timing = models.DateTimeField()
    date = models.DateField()

    def __str__(self):
        return f"{self.user}'s completed appointment on {self.date} at {self.timing}"



class Appointment(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    timing = models.TimeField()
    date = models.DateField()
    status=models.CharField(max_length=10,choices=[("pending","Pending"),("approved","Approved"),("rejected","Rejected")],default=("pending","Pending"))

    class Meta:
        unique_together = ['date', 'timing']

    def mark_as_completed(self):
        completed_appointment = CompletedAppointment(
            user=self.user,
            timing=self.timing,
            date=self.date
        )
        completed_appointment.save()
        self.delete()
