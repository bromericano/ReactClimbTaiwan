import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Layout = ({ children }) => {
    return (
        <main>
            <nav class="navbar navbar-expand-lg navbar-light bg-light static-top p-0 sticky-top" id="mainNav">
                <a class="navbar-brand d-none d-sm-inline ml-2" href="/">
                    <StaticImage src="../images/logo.svg" placeholder='blurred' alt="" />
                </a>
                <button class="navbar-toggler mr-sm-1 mx-auto mt-1 mb-1" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto text-center">
                    <li class="nav-item mx-auto mt-3">
                        <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="/">Information</a>
                    </li>
                    <li class="nav-item mx-auto mt-3">
                        <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="/" id="longDongNavLink">Long Dong</a>
                    </li>
                    <li class="nav-item mx-auto mt-3">
                        <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="/">Re Hai</a>
                    </li>
                    <li class="nav-item mx-auto mt-3">
                        <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="/">Big Cannon Cliff</a>
                    </li>
                    <li class="nav-item mx-auto mt-3">
                        <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="/">Guan Zi Ling</a>
                    </li>
                    <li class="nav-item mx-auto mt-3 mb-3 mb-sm-0">
                        <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="/">Shou Shan</a>
                    </li>
                    </ul>
                </div>
            </nav>
            {children}
        </main>
    )
}

export default Layout;