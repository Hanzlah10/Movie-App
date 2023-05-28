import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/Services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
})
export class MoviedetailsPage implements OnInit {
movie = null;
imageUrl = environment.images;

  constructor(private route: ActivatedRoute,private movieService: MovieService) { }

  ngOnInit() {
    const id  = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(id).subscribe((res) => {
      this.movie = res;
    });
  }
OpenHomepage(){
  window.open(this.movie.homepage);
}
}

