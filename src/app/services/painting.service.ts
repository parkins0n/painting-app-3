import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Painting } from '../models/painting.model';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  private paintings: Painting[] = [
    { 
      id: 1, 
      title: 'Starry Night', 
      year: 1889, 
      artist: 'Vincent van Gogh', 
      dimensions: '73.7 cm × 92.1 cm', 
      location: 'Museum of Modern Art, New York',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/525px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'
    },
    { 
      id: 2, 
      title: 'Mona Lisa', 
      year: 1503, 
      artist: 'Leonardo da Vinci', 
      dimensions: '77 cm × 53 cm', 
      location: 'Louvre Museum, Paris',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
    },
    { 
      id: 3, 
      title: 'The Night Café', 
      year: 1888, 
      artist: 'Vincent van Gogh', 
      dimensions: '92 cm × 73 cm', 
      location: 'Pushkin Museum, Moscow',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vincent_Willem_van_Gogh_076.jpg'
    },
    { 
      id: 4, 
      title: 'Irises', 
      year: 1889, 
      artist: 'Vincent van Gogh', 
      dimensions: '71 cm × 93 cm', 
      location: 'J. Paul Getty Museum, Los Angeles',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Vincent_van_Gogh_-_Irises_%281889%29.jpg/2560px-Vincent_van_Gogh_-_Irises_%281889%29.jpg'
    }
  ];

  getPaintings(): Observable<Painting[]> {
    return of(this.paintings);
  }

  getPainting(id: number): Observable<Painting | undefined> {
    return of(this.paintings.find(painting => painting.id === id));
  }

  getPaintingsByArtist(artist: string): Observable<Painting[]> {
    return of(this.paintings.filter(painting => painting.artist === artist));
  }
}
