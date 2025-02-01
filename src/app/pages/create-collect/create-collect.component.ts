import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create-collect',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './create-collect.component.html',
  styleUrl: './create-collect.component.css'
})
export class CreateCollectComponent {
  imageUrl: string | ArrayBuffer | null | undefined = null

  onChangeFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const file: File = input.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target?.result;
        }

        reader.readAsDataURL(file);
      }
    }
  }

}
