import React from "react";
import useStyles from "./navigationStyles";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.menuContainer}>
      <div className={classes.logo}>
        <Link href="#">
          <img src="images/logo.svg" alt="logo" />
        </Link>
        <div id="button-menu" className={classes.hamburgerMenuButton}>
          <img src="images/icon-hamburger.svg" alt="" />
        </div>
      </div>

      <div className={classes.menuItems}>
        <nav className={classes.navMenu}>
          <ul className={classes.ulOuter}>
            <li className={classes.menuList}>
              <Link href="#">
                <a>
                  Product
                  <picture>
                    <source
                      srcSet="images/icon-arrow-dark.svg"
                      media="(max-width: 1000px)"
                    />
                    <source srcSet="images/icon-arrow-light.svg" />
                    <img
                      src="images/icon-arrow-light.svg"
                      alt="Illustration Laptop Default"
                    />
                  </picture>
                </a>
              </Link>
              <ul className={classes.ulInner}>
                <li>
                  <Link href="#">
                    <a>Overview</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Marketplace</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Features</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Integrations</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={classes.menuList}>
              <Link href="#">
                <a>
                  Company
                  <picture>
                    <source
                      srcSet="images/icon-arrow-dark.svg"
                      media="(max-width: 1000px)"
                    />
                    <source srcSet="images/icon-arrow-light.svg" />
                    <img
                      src="images/icon-arrow-light.svg"
                      alt="Illustration Laptop Default"
                    />
                  </picture>
                </a>
              </Link>
              <ul>
                <li>
                  <Link href="#">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Careers</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={classes.menuList}>
              <Link href="#">
                <a>
                  Connect
                  <picture>
                    <source
                      srcSet="images/icon-arrow-dark.svg"
                      media="(max-width: 1000px)"
                    />
                    <source srcSet="images/icon-arrow-light.svg" />
                    <img
                      src="images/icon-arrow-light.svg"
                      alt="Illustration Laptop Default"
                    />
                  </picture>
                </a>
              </Link>
              <ul>
                <li>
                  <Link href="#">
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Newsletter</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>LinkedIn</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className={classes.loginAndSignup}>
          <Grid container spacing={1} justify="center">
            <Grid item>
              <Link href="#">
                <a className={classes.login}>Login</a>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#">
                <a className={classes.signup}>Sign Up</a>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Navigation;