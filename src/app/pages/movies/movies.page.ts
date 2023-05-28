import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScrollContent, IonSpinner, LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/Services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
movies= [];
currentpage = 1;
baseurl = environment.images;

  constructor(private moviesService: MovieService, private loadCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }


async loadMovies(event? :InfiniteScrollCustomEvent) {
    const loading = await this.loadCtrl.create({
      message: 'Loading',
      spinner: 'bubbles'
    })
    await loading.present();

    this.moviesService.getTopRatedMovies(this.currentpage).subscribe((res) => {
      loading.dismiss();
      this.movies.push(...res.results);
      // this.movies = [...this.movies,...res.results];
      console.log(res);

      event?.target.complete();
    })
  }

  loadMore(event: InfiniteScrollCustomEvent){

    this.currentpage++;
    this.loadMovies(event);
  }
}
