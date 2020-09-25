import { LoginComponent } from './views/pages/login.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import routing module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { AuthService } from './views/pages/auth.service';

// Import Marerial
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule }from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FooterComponent } from './views/template/footer/footer.component';
import { HeaderComponent } from './views/template/header/header.component';
import { NavComponent } from './views/template/nav/nav.component';
import { ProdutosCrudComponent } from './views/produtos-crud/produtos-crud.component';
import { ProdutosCriadosComponent } from './views/produtos/produtos-criados/produtos-criados.component';
import { ProdutosReadComponent } from './views/produtos/produtos-read/produtos-read.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ProdutosCrudComponent,
    ProdutosCriadosComponent,
    ProdutosReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
