import React from "react";
import '../data';
import Head from 'next/head';

export default ({ pageMetaData: { title='CV: Jason Pierce', description='', keywords='' } }) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="utf-8" />
        <meta name="author" content="Jason Pierce" />

        {/* Favicons */}
        <link rel="shortcut icon" href="/images/favicon-frame.ico" type="image/x-icon" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />

        {/* Mobile */}
        {/* TODO: add IE specific meta tag for scaling/rendering */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="apple-touch-startup-image" href="/images/launch.png" />
        <meta name="apple-mobile-web-app-title" content="SponHumanProd" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* iPhone(first generation or 2G), iPhone 3G, iPhone 3GS */}
        <link rel="apple-touch-icon" sizes="57x57" href="/images/touch-icon-iphone.png"/>
        {/* iPad and iPad mini @1x */}
        <link rel="apple-touch-icon" sizes="76x76" href="/images/touch-icon-ipad.png" />
        {/* iPhone 4, iPhone 4s, iPhone 5, iPhone 5c, iPhone 5s, iPhone 6, iPhone 6s, iPhone 7, iPhone 7s, iPhone8 */}
        <link rel="apple-touch-icon" sizes="120x120" href="/images/touch-icon-iphone-retina.png" />
        {/* iPad and iPad mini @2x */}
        <link rel="apple-touch-icon" sizes="152x152" href="/images/touch-icon-ipad-retina.png" />
        {/* iPad Pro */}
        <link rel="apple-touch-icon" sizes="167x167" href="/images/touch-icon-ipad-pro.png" />
        {/* iPhone X, iPhone 8 Plus, iPhone 7 Plus, iPhone 6s Plus, iPhone 6 Plus */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/touch-icon-iphone-6-plus.png" />
        {/* Android Devices High Resolution */}
        <link rel="icon" sizes="192x192" href="/images/icon-hd.png" />
        {/* Android Devices Normal Resolution */}
        <link rel="icon" sizes="128x128" href="/images/icon.png" />
    </Head>
);
