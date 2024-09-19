import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFake } from '../../data/data-fake';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  image: string = ""
  title: string = ""
  description: string = ""
  private id: string|any = "0"
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id')
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string) {
    const result = DataFake.filter(article => article.id == id)[0]
    
    this.title = result.title
    this.description = result.description
    this.image = result.image
  }


}
