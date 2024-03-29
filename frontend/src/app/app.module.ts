import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'

import { PrimeNgModule } from 'src/primeng.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { SignUpComponent } from './pages/sign-up/sign-up.component'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { CreateRoomComponent } from './pages/create-room/create-room.component'
import { RoomComponent } from './pages/room/room.component'
import { UserService } from './services/user.service'
import { RoomService } from './services/room.service';
import { ProfileComponent } from './pages/profile/profile.component'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SignUpComponent,
        SignInComponent,
        NavbarComponent,
        CreateRoomComponent,
        RoomComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        PrimeNgModule,
        ReactiveFormsModule
    ],
    providers: [UserService, RoomService],
    bootstrap: [AppComponent]
})
export class AppModule {}
