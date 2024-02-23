// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'es',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    mode: 'opt-in',                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: true,                   // default: true
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'es': {
            consent_modal: {
                title: 'Utilizamos algunas cookies 🍪',
                description: 'Hola, esta web utiliza cookies para guardar tus preferencias y tracking para comprender como interactuas con el sitio. Eso sí, tracking solo bajo consentimiento.',
                primary_btn: {
                    text: 'Aceptar',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Rechazar',
                    role: 'settings'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: '🍪 Cookies - Preferences',
                save_settings_btn: 'Confirmar 🍪',
                accept_all_btn: 'Aceptar',
                reject_all_btn: 'Rechazar',
                close_btn_label: 'Cerrar',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Uso de Cookies 📢',
                        /*description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'*/
                        description: 'Las cookies aseguran la funcionalidad básica del sitio, una mejora en la experiencia de navegación, y también tu selección en esta sección de preferencias. Puedes elegir en el momento que desees cambiar la configuración de cualquiera de las categorías. Para mas detalles relacionados a las cookies y manejo de datos en línea, por favor lee las <a href="./pages/cookies.html" class="cc-link">políticas de privacidad</a> completas.'
                    }, {
                        title: 'Cookies estrictamente necesarias.',
                        description: 'Estas cookies son necesarias para el correcto funcionamiento del sitio web. Sin estas cookies, la navegación podría no funcionar de forma esperada.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: 'cc_cookie',       
                                col2: '2befocus.com',
                                col3: '6 months',
                                col4: 'Cookie Consent preferences'
                            },
                            {
                                col1: 'ZCAMPAIGN_CSRF_TOKEN',
                                col2: 'ocus-zcmp.maillist-manage.eu',
                                col3: 'Session',
                                col4: 'Used to prevent (CSRF) Cross Site Request Forgery attack',
                            },
                            {
                                col1: '_zcsr_tmp',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'This cookie is necessary for the login function on the website (chat)',
                            }
                        ]
                    }, {
                        title: 'Cookies de rendimiento y anális.',
                        description: 'Estas cookies permiten que el sitio web recuerde las elecciones que ha realizado en el pasado.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                            cookie_table: [             // list of all expected cookies
                            {
                                col1: '_zldp',       
                                col2: '2befocus.com',
                                col3: '1 year',
                                col4: 'This cookie identifies the unique visitors'
                            },
                            {
                                col1: '_zldt',
                                col2: '2befocus.com',
                                col3: '1 day',
                                col4: 'This cookie identifies unique visits for a visitor',
                            },
                            {
                                col1: 'JSESSIONID',
                                col2: 'ocus-zcmp.maillist-manage.eu',
                                col3: 'Session',
                                col4: 'This cookie is generated by servlet containers and used for session management for the HTTP protocol',
                            }
                        ]
                    }, {
                        title: 'Cookies de publicidad y público objetivo.',
                        description: 'Estas cookies recopilan información sobre cómo usa el sitio web, qué páginas visitó y en qué enlaces hizo clic. Todos los datos son anónimos y no se pueden usar para identificarlo.',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        },
                            cookie_table: [             // list of all expected cookies
                            {
                                col1: 'Alphanumeric 10 char(eg: 1e5a17c8ab)',
                                col2: 'ocus-zcmp.maillist-manage.eu',
                                col3: 'Session',
                                col4: 'Load balancing and session stickiness',
                            }
                            ]
                    }, {
                        title: 'Más información',
                        description: 'Para cualquier consulta en relación con nuestra política de cookies y sus elecciones, por favor, <a class="cc-link" href="./contact.html">contáctanos</a>.',
                    }
                ]
            }
        }
    }
});