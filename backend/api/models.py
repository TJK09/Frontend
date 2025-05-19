from django.db import models

class Appointment(models.Model):
    name = models.CharField(max_length=100)
    contact = models.CharField(max_length=15, default="")  # Add a default value here
    date = models.DateField()
    time = models.TimeField()
    appointment_type = models.CharField(
        max_length=20, 
        choices=[('Consultation', 'Consultation'), 
                 ('Follow-up', 'Follow-up'), 
                 ('Emergency', 'Emergency')],
        default='Consultation'
    )
    message = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} - {self.date} {self.time}"

