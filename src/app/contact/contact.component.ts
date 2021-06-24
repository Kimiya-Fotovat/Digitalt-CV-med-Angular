import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  private subscription: Subscription;
  isSending: boolean = false;
  sentStatus: boolean = false;
  submitted: boolean = false;

  constructor(private http: HttpClient, private title: Title, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title.setTitle(this.route.snapshot.data.title || 'About Me');
    this.contactForm = new FormGroup({
      'fullName': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'msg_text': new FormControl(null,Validators.required)
    }, {
      updateOn: "submit"
    });
  }

  onSubmit() {
    this.submitted = true;
    if(!this.contactForm.valid){
      return;
    }
    this.isSending = true;
    this.sentStatus = false;
    const req_body = {
      "fullName": this.contactForm.get('fullName').value,
      "_replyto": this.contactForm.get('email').value,
      "msg_text": this.contactForm.get('msg_text').value,
    }
    this.subscription = 
      this.http
        .post<{ ok?: boolean }>(
          'https://formspree.io/f/myyljazq', 
          req_body, 
          { headers: new HttpHeaders({ 'Content-Type': 'application/json' } )}
        )
        .subscribe((res) => {
          this.isSending = false;
          this.sentStatus = res.ok;
          this.submitted = false;
          this.contactForm.reset();
        }, (error) => {
          this.isSending = false;
          this.sentStatus = false;
        });
  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
