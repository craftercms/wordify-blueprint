import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  message: ''
};

const initialToastData = {
  display: false,
  type: '',
  text: ''
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() state;
  public posts_o;
  public formData = { ...initialFormData };
  public toastData = { ...initialToastData };

  constructor(private contentService: ContentService) {
  }

  showToast(text: string, type: string) {
    this.toastData = {
      display: true,
      text,
      type
    };
    setTimeout(() => {
      this.toastData = { ...initialToastData };
    }, 3000);
  }

  handleSubmit() {
    this.contentService.submitContactData(this.formData)
      .subscribe(response => {
        if (response.success) {
          this.formData = { ...initialFormData };
          this.showToast('Message successfully sent!', 'success');
        } else {
          this.showToast('There was an error sending the message', 'danger');
        }
      })

  }

  ngOnInit(): void {
    this.posts_o = this.state.posts;
  }

}
