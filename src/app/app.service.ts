import { ValidationResultModel } from './models/validationResult.model';
import { async } from '@angular/core/testing';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppService<TModel> {

  constructor(private http: HttpClient) { }

  get headers(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Credentials', '*');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept, X-Auth-Token');
    return headers;
  }

  private methodUrl(method: string): string {
    return `${environment.baseUrl}/${environment.versionBase}/api/${method}`;
  }


  protected async getAllAsync(methodName: string): Promise<TModel[]> {
    const url = this.methodUrl(methodName);
    const result = await this.http.get<TModel[]>(
      url,
      { headers: this.headers }
    ).toPromise();

    return result;
  }

  protected async getAsync(methodName: string): Promise<TModel> {
    const url = this.methodUrl(methodName);
    const result = await this.http.get<TModel>(
      url,
      { headers: this.headers }
    ).toPromise();

    return result;
  }

  protected async postAsync(methodName: string, model: any): Promise<TModel> {
    const url = this.methodUrl(methodName);
    const result = await this.http.post<TModel>(
      url,
      JSON.stringify(model),
      { headers: this.headers }
    ).toPromise();

    return result;
  }

  protected async putAsync(methodName: string, model: any = null): Promise<TModel> {
    const url = this.methodUrl(methodName);
    const result = await this.http.put<TModel>(
      url,
      JSON.stringify(model),
      { headers: this.headers }
    ).toPromise();

    return result;
  }

  protected async putAllAsync(methodName: string, model: any = null): Promise<TModel[]> {
    const url = this.methodUrl(methodName);
    const result = await this.http.put<TModel[]>(
      url,
      JSON.stringify(model),
      { headers: this.headers }
    ).toPromise();

    return result;
  }

  protected async deleteAsync(methodName: string): Promise<TModel> {
    const url = this.methodUrl(methodName);
    const result = await this.http.delete<TModel>(
      url,
      { headers: this.headers }
    ).toPromise();

    return result;
  }


  protected async signInAsync(model: any): Promise<TModel> {
    const result = await this.http.post<TModel>(
      `${environment.baseUrl}/${environment.versionBase}/token`,
      JSON.stringify(model),
      { headers: this.headers }
    ).toPromise();

    return result;
  }
}
