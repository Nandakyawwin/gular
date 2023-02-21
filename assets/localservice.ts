import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";
@Injectable()
export class localService {


    BASE_URL = 'http://139.59.109.189:3000/';

    // Admin 

    adminLogin_url = this.BASE_URL + 'admin/adminLogin';
    adminRegister_url = this.BASE_URL + 'admin/adminRegister';
    admin_all_url = this.BASE_URL + 'admin/all';
    admin_all_movie_url = this.BASE_URL + 'admin/allMovie';
    admin_update_url = this.BASE_URL + 'admin/update';
    admin_post_movie_url = this.BASE_URL + 'admin/post/movie';
    admin_update_movie_url = this.BASE_URL + 'admin/update/movie';
    admin_movieDetails_url = this.BASE_URL + 'admin/movieDetails/';
    admin_movie_paginate_url = this.BASE_URL + 'admin/movie/paginate/';
    admin_movie_delete_url = this.BASE_URL + 'admin/delete/movie';
    admin_movieSeason_url = this.BASE_URL + 'admin/movieSeason';
    admin_all_job_url = this.BASE_URL + 'admin/allJob';
    admin_post_job_url = this.BASE_URL + 'admin/post/job';
    admin_job_paginate_url = this.BASE_URL + 'admin/job/paginate/';
    admin_job_delete_url = this.BASE_URL + 'admin/deleteJob';
    admin_update_job_url = this.BASE_URL + 'admin/update/job';
    admin_all_ads_url = this.BASE_URL + 'admin/allAds';
    admin_ads_paginate_url = this.BASE_URL + 'admin/ads/paginate/';
    admin_ads_delete_url = this.BASE_URL + 'admin/delete/ads';
    admin_ads_update_url = this.BASE_URL + 'admin/updateAds';
    admin_post_ads_url = this.BASE_URL + 'admin/postAds';
    admin_user_paginate = this.BASE_URL + 'admin/user/paginate/';
    admin_mod_create_url = this.BASE_URL + 'admin/modRegister';
    admin_mod_paginate_url = this.BASE_URL + 'admin/mod/paginate/';
    admin_mod_delete_url = this.BASE_URL + 'admin/delete/mod';

    // Mod

    mod_login_url = this.BASE_URL + 'modLogin';
    mod_update_url = this.BASE_URL + 'update';
    mod_post_movie_url = this.BASE_URL + 'post/movie';
    mod_update_movie_url = this.BASE_URL + 'update/movie';
    mod_movieDetails_url = this.BASE_URL + 'movieDetails/';
    mod_movie_paginate_url = this.BASE_URL + 'movie/paginate/';
    mod_delete_movie_url = this.BASE_URL + 'delete/movie';
    mod_movieSeason_url = this.BASE_URL + 'movieSeason';
    mod_job_paginate_url = this.BASE_URL + 'job/paginate/';
    mod_ads_paginate_url = this.BASE_URL + 'ads/paginate/';
    mod_user_paginate_url = this.BASE_URL + 'user/paginate/';


    // Guest
    // login_url = this.BASE_URL + 'login';
    // register_url = this.BASE_URL + 'register';
    main_movie_url = this.BASE_URL + 'mainMovies';
    trendingMovie_url = this.BASE_URL + 'trendingMovie';
    latest_movie_url = this.BASE_URL + 'latestMovies';
    movieDetails_url = this.BASE_URL + 'movieDetails/';
    movieSearch_url = this.BASE_URL + 'findMovie';
    movieCategory_url = this.BASE_URL + 'movieCategory';
    movie_paginate_url = this.BASE_URL + 'movie/paginate/';
    movieSeason_url = this.BASE_URL + 'movieSeason';
    jobPaginate_url = this.BASE_URL + 'job/paginate/';
    adsPaginate_url = this.BASE_URL + 'ads/paginate/';
    imgaeURL = 'http://139.59.109.189:3000';


    isAuth = new Subject<boolean>();
    authBool = this.isAuth.asObservable();

    isDefine = new Subject<boolean>();
    trueOR = this.isDefine.asObservable();
    constructor(private http: HttpClient) {

    }

    ////////////////////////////////////////////////////////
    /////////////                             //////////////
    ////////////             Guest            //////////////
    ////////////                              //////////////
    ////////////////////////////////////////////////////////

    MainMovie() {
        return this.http.get(this.main_movie_url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    trendingMovie() {
        return this.http.get(this.trendingMovie_url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    latestMovie() {
        return this.http.get(this.latest_movie_url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    movieDetail(movieid: any) {

        const url = this.movieDetails_url + movieid;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    movieCategory(category: any) {
        return this.http.post(this.movieCategory_url, category).pipe(
            map(
                (response: any) => response
            )
        )
    }

    moviepaginate(start: any, end: any) {
        const url = this.movie_paginate_url + start + '/' + end;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    findMovie(name: any) {
        return this.http.post(this.movieSearch_url, name).pipe(
            map(
                (response: any) => response
            )
        )
    }
    movieSeason(episodes: any) {
        return this.http.post(this.movieSeason_url, episodes).pipe(
            map(
                (response: any) => response
            )
        )
    }

    jobPaginate(start: any, end: any) {
        const url = this.jobPaginate_url + start + '/' + end;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adsPaginate(start: any, end: any) {
        const url = this.adsPaginate_url + start + '/' + end;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    ////////////////////////////////////////////////////////
    /////////////                             //////////////
    ////////////             Guest            //////////////
    ////////////                              //////////////
    ////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////
    /////////////                             //////////////
    ////////////             Admin            //////////////
    ////////////                              //////////////
    ////////////////////////////////////////////////////////

    adminLogin(data: any) {
        return this.http.post(this.adminLogin_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminRegister(data: any) {
        return this.http.post(this.adminRegister_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminAll() {
        return this.http.get(this.admin_all_url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminUpdate(data: any) {
        return this.http.post(this.admin_update_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminAllMovie() {
        return this.http.get(this.admin_all_movie_url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminPostMovie(data: any) {
        return this.http.post(this.admin_post_movie_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminUpdateMovie(data: any) {
        return this.http.post(this.admin_update_movie_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminMovieDetail(movieid: any) {
        const url = this.admin_movieDetails_url + movieid;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminMoviePaginate(start: any, end: any) {
        const url = this.admin_movie_paginate_url + start + '/' + end;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminMovieDelete(data: any) {
        return this.http.delete(this.admin_movie_delete_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminMovieSeason(episodes: any) {
        return this.http.post(this.admin_movieSeason_url, episodes).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminAllJob() {
        return this.http.get(this.admin_all_job_url).pipe(
            map(
                (response: any) => response
            )
        )
    }
    
    adminJobPost(data: any) {
        return this.http.post(this.admin_post_job_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminJobPaginate(start: any, end: any) {
        const url = this.admin_job_paginate_url + start + '/' + end;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminJobDelete(data: any) {
        return this.http.post(this.admin_job_delete_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminJobUpdate(data: any) {
        return this.http.post(this.admin_update_job_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminAllAds() {
        return this.http.get(this.admin_all_ads_url).pipe(
            map(
                (response: any) => response
            )
        )
    }
    adminAdsPaginate(start: any, end: any) {
        const url = this.admin_ads_paginate_url + start + '/' + end;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminAdsDelete(filename: any) {
        return this.http.post(this.admin_ads_delete_url, filename).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminAdsUpdate(data: any) {
        return this.http.post(this.admin_ads_update_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminAdsPost(data: any) {
        return this.http.post(this.admin_post_ads_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminUserPaginate(start: any, end: any) {
        const url = this.admin_user_paginate + start + '/' + end;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminModCreate(data: any) {
        return this.http.post(this.admin_mod_create_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminModPaginate(start: any, end: any) {
        const url = this.admin_mod_paginate_url + start + '/' + end;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    adminModDelete(data: any) {
        return this.http.post(this.admin_mod_delete_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    ////////////////////////////////////////////////////////
    /////////////                             //////////////
    ////////////             Admin            //////////////
    ////////////                              //////////////
    ////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////
    /////////////                             //////////////
    ////////////               Mod            //////////////
    ////////////                              //////////////
    ////////////////////////////////////////////////////////


    modLogin(data: any) {
        return this.http.post(this.mod_login_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    modUpdate(data: any) {
        return this.http.post(this.mod_update_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    modMoviePost(data: any) {
        return this.http.post(this.mod_post_movie_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    modMovieUpdate(data: any) {
        return this.http.post(this.mod_update_movie_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }

    modMovieDetail(movieid: any) {
        const url = this.mod_movieDetails_url + movieid;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    modMoviePaginate(start: any, end: any) {
        const url = this.mod_movie_paginate_url + start + '/' + end;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    modMovieDelete(data: any) {
        return this.http.delete(this.mod_delete_movie_url, data).pipe(
            map(
                (response: any) => response
            )
        )
    }
    modMovieSeason(episode: any) {
        return this.http.post(this.mod_movieSeason_url, episode).pipe(
            map(
                (response: any) => response
            )
        )
    }

    modJobPaginate(start: any, end: any) {
        const url = this.mod_job_paginate_url + start + '/' + end;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    modAdsPaginate(start: any, end: any) {
        const url = this.mod_ads_paginate_url + start + '/' + end;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    modUserPaginate(start: any, end: any) {
        const url = this.mod_user_paginate_url + start + '/' + end;
        return this.http.get(url).pipe(
            map(
                (response: any) => response
            )
        )
    }

    ////////////////////////////////////////////////////////
    /////////////                             //////////////
    ////////////               Mod            //////////////
    ////////////                              //////////////
    ////////////////////////////////////////////////////////


    //     MoviePaginate(start: any, end: any) {
    //         const url = this.PaginateMovie + start + '/' + end;
    //         return this.http.get(url).pipe(
    //             map(
    //                 (response: any) => response
    //             )
    //         )
    //     }

    //     findMovieSearch(data: any) {
    //         return this.http.post(this.findMovieSearchURL, data).pipe(
    //             map(
    //                 (response: any) => response
    //             )
    //         )
    //     }
    //     PostAds(data: any) {
    //         return this.http.post(this.PostAdsURL, data).pipe(
    //             map(
    //                 (response: any) => response
    //             )
    //         );
    //     }

    //     deleteJob(_id: any) {
    //         return this.http.post(this.DeleteJobURL, _id).pipe(
    //             map(
    //                 (response: any) => response
    //             )
    //         );
    //     }
    //     postJob(data: any) {
    //         return this.http.post(this.PostJobURL, data).pipe(
    //             map(
    //                 (response: any) => response
    //             )
    //         );
    //     }

    changeAuth(val: boolean) {
        this.isAuth.next(val);
    }

    changeState(val: boolean) {
        this.isDefine.next(val);
    }


    //     findMovie(id: any) {
    //         const moviefinalURL = this.findMovieURL + id;
    //         return this.http.get(moviefinalURL).pipe(
    //             map(
    //                 (response: any) => response
    //             )
    //         )

    //     }

    //     getallmovie() {
    //         return this.http.get(this.movieURL).pipe(
    //             map(
    //                 (response: any) => response
    //             )
    //         )
    //     }

    //     getallAdminMovie() {
    //         return this.http.get(this.adminMovieURL).pipe(
    //             map(
    //                 (response: any) => response
    //             )
    //         )
    //     }

    //     AdminLogin(data: any) {
    //         return this.http.post(this.AdminLoginURL, data).pipe(
    //             map(
    //                 (response: any) => response
    //             )
    //         )
    //     }
    //     AdminAll(): any {
    //         return this.http.get(this.AdminAllURL).pipe(
    //             map(
    //                 (response: any) => response
    //             )
    //         )
    //     }
    //     allJobAdmin() {
    //         return this.http.get(this.AllJobURL).pipe(
    //             map(
    //                 (response: any) => response
    //             )
    //         )
    //     }

    //     PostMoviebyAdmin(datas: any) {

    //         return this.http.post(this.AdminPostmovieURL, datas).pipe(
    //             map(
    //                 (response: any) => response
    //             )
    //         )
    //     }
    //     deleteMovie(data: any) {
    //         return this.http.delete(this.DeleteMovieURL, data).pipe(
    //             map(
    //                 (response: any) => response
    //             )
    //         )

    //     }

}




// movieURL = this.BASE_URL + 'movies';
// adminMovieURL = this.BASE_URL + 'admin/movies';
// AdminLoginURL = this.BASE_URL + 'admin/adminLogin';
// AdminAllURL = this.BASE_URL + 'admin/all';
// AdminPostmovieURL = this.BASE_URL + 'admin/post/movie';
// DeleteMovieURL = this.BASE_URL + 'admin/delete/movie';
// findMovieURL = this.BASE_URL + 'admin/findmovie/';
// findMovieSearchURL = this.BASE_URL + 'admin/findMovie';
// PostJobURL = this.BASE_URL + 'admin/post/job';
// AllJobURL = this.BASE_URL + 'admin/allJob';
// DeleteJobURL = this.BASE_URL + 'admin/deleteJob';
// PostAdsURL = this.BASE_URL + 'admin/postAds';
// PaginateMovie = this.BASE_URL + 'admin/movie/paginate/'