<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'primerapagina' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.9282$51z_Q(7dqul5.F5S 6<Efka>^cXx1f_M(I.gTTK:j|f.n|<T0I#/@TfKTj' );
define( 'SECURE_AUTH_KEY',  'Svx|UQ;?CWZ$KK}-{VG}{rxl*YM2%L3&M>gC>.&D?4A]!6Zq/uuU)3Dywx{%^psZ' );
define( 'LOGGED_IN_KEY',    '!@tckw-VP(z+0=FyJy!gs`/,x5iJ1V_om5j9g()2JIt;{ocQ_<^|4y;_*O`vvVbG' );
define( 'NONCE_KEY',        'Rz,nY$@[j?lOWN<yw/C?:pjkexDj}_~n4d+c#V:IiGz.FE;h,_,/;+H4UdKcfH<2' );
define( 'AUTH_SALT',        '.(Q! )%~}_!,21M}5xX8H>[PnZ*x0K%7-JgU&=6O~y)hW)!e>Q[~XZ8O j#Gu}!x' );
define( 'SECURE_AUTH_SALT', '6!Ar&Z0![G>YIipyTV!omq.Zv$Wp>it=wNrwGDRh;B;7sPdPP9p_h`wLMutCs(Ib' );
define( 'LOGGED_IN_SALT',   '1lC`XfHO/s} E-ZUr*63D9#1RO3V_idF7jOWCuSXD} `|%Az.i4*YPaWMj(w6}i&' );
define( 'NONCE_SALT',       '){F*6#r^kb#A^!X-}xXO8@i7AHu^/SsWh=VS;dJzT9h}@`wpCyt`uZ`4vC?rSHiY' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
