import { Component } from '@angular/core';
import { FooterBottom } from '../../molecules/footer-bottom/footer-bottom';
import { FooterLeads } from "../../molecules/footer-leads/footer-leads";

@Component({
  selector: 'app-footer-section',
  imports: [FooterBottom, FooterLeads],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.css',
  standalone: true
})
export class FooterSection {

}
