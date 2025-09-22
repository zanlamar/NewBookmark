import { Component } from '@angular/core';
import { Heading } from "../../atoms/heading/heading";
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'app-first-section',
  imports: [Button, Heading],
  templateUrl: './first-section.html',
  styleUrl: './first-section.css'
})

export class FirstSection {

}
