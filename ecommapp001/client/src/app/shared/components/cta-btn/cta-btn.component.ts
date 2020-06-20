import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cta-btn',
  templateUrl: './cta-btn.component.html',
  styleUrls: ['./cta-btn.component.scss']
})
export class CtaBtnComponent implements OnInit {

  @Input() cProps;

  tag = '';
  type = '';
  href = '';
  text = '';
  title = '';
  primaryicon = '';
  ctaicon = '';
  ctastyle = '';
  isoutline = false;
  size = '';
  share = [];

  cssclass = '';

  constructor() { }

  ngOnInit(): void {

    const props = this.cProps || {};

    if (props.tag === 'button' || props.tag === 'a') {
      this.tag = props.tag;

      this.cssclass = 'cta-comp btn';

      if (this.tag === 'button') {
        this.type = props.type || 'button';
      }

      if (this.tag === 'a') {
        this.href = props.href || '#';
      }

      if (props.ctastyle && [true, 'true'].includes(props.isoutline)) {
        this.cssclass += ' btn-outline-' + props.ctastyle;
      }
      if (props.ctastyle && ![true, 'true'].includes(props.isoutline)) {
        this.cssclass += ' btn-' + props.ctastyle;
      }
      if (props.size) {
        this.cssclass += ' btn-' + props.size;
      }
  
      if (props.primaryicon) {
        this.primaryicon = props.primaryicon;
      }
      if (props.ctaicon) {
        this.ctaicon = props.ctaicon;
      }

      if (props.primaryicon && props.ctaicon) {
        this.cssclass += ' icon-lr';
      }
      if (!props.primaryicon && props.ctaicon) {
        this.cssclass += ' icon-r';
      }
      if (props.primaryicon && !props.ctaicon) {
        this.cssclass += ' icon-l';
      }
  
      if (!props.text) {
        this.cssclass += ' no-text';
      }
  
      if (props.text) {
        this.text += props.text;
      }
  
      this.title = props.title;
      
      if (!props.title) {
        this.title = props.text;
      }

      if ((props.share || []).length > 0) {
        this.share = props.share;
      }
    }

  }

}
