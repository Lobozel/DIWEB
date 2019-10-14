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
define( 'AUTH_KEY',         'gXZ%%(F;sB1Z|DwtGaEy_C]pail;uwefk6DQG?7wamw1G!F%2Xd,+CB1N~!_IneR' );
define( 'SECURE_AUTH_KEY',  'JR`MFoH8Z34N| avkVNnWnp)jq}s,?;b0Lf,o]H74k?h-&v.o_MJPE*{.$wm=@S`' );
define( 'LOGGED_IN_KEY',    'p[-k6}Ew1(kWd$o|;C,x0NP7>=Ywg9`GWLl_xVZ=Rj$|oj8S*4pX09+XOLF<IaD{' );
define( 'NONCE_KEY',        'E;ik7>6yjvRQu9r~RjeA<SqyURN1x -B-0jIE_.6 1goC$oh-Mn^8ZkyFDiH)%< ' );
define( 'AUTH_SALT',        'mbG<Jv)xV<U}MS;KGQ7{Q,LvuihAicUXR7~WjQ@PgqE/R$h:yi)9c`d[qwN?A|l`' );
define( 'SECURE_AUTH_SALT', 'sOUgO23PUQC9ChHm*KeG.w`|ruMn?FS8-s/xAT S|8^$a>cGBz^=0Eu*Ig<4`B`g' );
define( 'LOGGED_IN_SALT',   'ODblafO-bf$LH9p2nOn&DeC@3(v1kDvn3>hwA_LGtq`Oo2w~O]S9M#m9p!Jnr,(B' );
define( 'NONCE_SALT',       '_JMhm.slyo&p(e2B4-v@TkW/}!`BX_%HsU<LlTyfe3Hqt*Uszek(!LH97I$s3]z1' );

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
