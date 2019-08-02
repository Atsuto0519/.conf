
:kak

"26.2"

#s(hash-table size 65 test equal rehash-size 1.5 rehash-threshold 0.8125 data ("straight" ("2019-08-02 21:16:48" ("emacs") (:type git :host github :repo "raxod502/straight.el" :files ("straight*.el") :branch "master" :package "straight" :local-repo "straight.el")) "org-elpa" ("2019-08-02 21:16:47" nil (:local-repo nil :package "org-elpa" :type git)) "melpa" ("2019-08-02 21:16:48" nil (:type git :host github :repo "melpa/melpa" :no-build t :package "melpa" :local-repo "melpa")) "use-package" ("2019-08-02 21:16:48" ("emacs" "bind-key") (:type git :flavor melpa :files (:defaults (:exclude "bind-key.el" "bind-chord.el" "use-package-chords.el" "use-package-ensure-system-package.el") "use-package-pkg.el") :host github :repo "jwiegley/use-package" :package "use-package" :local-repo "use-package")) "bind-key" ("2019-08-02 21:16:48" nil (:flavor melpa :files ("bind-key.el" "bind-key-pkg.el") :package "bind-key" :local-repo "use-package" :type git :repo "jwiegley/use-package" :host github)) "init-loader" ("2019-08-01 15:33:41" nil (:type git :flavor melpa :files ("init-loader.el" "init-loader-pkg.el") :host github :repo "emacs-jp/init-loader" :package "init-loader" :local-repo "init-loader")) "gnu-elpa-mirror" ("2019-08-02 21:16:48" nil (:type git :host github :repo "emacs-straight/gnu-elpa-mirror" :no-build t :package "gnu-elpa-mirror" :local-repo "gnu-elpa-mirror")) "emacsmirror" ("2019-08-02 21:16:48" nil (:type git :host github :repo "emacsmirror/epkgs" :nonrecursive t :no-build t :package "emacsmirror" :local-repo "epkgs")) "company" ("2019-08-02 21:16:48" ("emacs") (:type git :flavor melpa :host github :repo "company-mode/company-mode" :package "company" :local-repo "company-mode")) "org-doing" ("2019-08-02 21:16:48" nil (:type git :flavor melpa :files (:defaults "bin" "org-doing-pkg.el") :host github :repo "rudolfolah/org-doing" :package "org-doing" :local-repo "org-doing")) "company-tabnine" ("2019-08-02 21:16:48" ("emacs" "company" "cl-lib" "dash" "s" "unicode-escape") (:type git :flavor melpa :host github :repo "TommyX12/company-tabnine" :package "company-tabnine" :local-repo "company-tabnine")) "cl-lib" ("2019-08-02 21:16:48" nil (:type git :host github :repo "emacs-straight/cl-lib" :package "cl-lib" :local-repo "cl-lib")) "dash" ("2019-08-02 21:16:48" nil (:type git :flavor melpa :files ("dash.el" "dash-pkg.el") :host github :repo "magnars/dash.el" :package "dash" :local-repo "dash.el")) "s" ("2019-08-02 21:16:48" nil (:type git :flavor melpa :files ("s.el" "s-pkg.el") :host github :repo "magnars/s.el" :package "s" :local-repo "s.el")) "unicode-escape" ("2019-08-02 21:16:48" ("emacs" "names" "dash") (:type git :flavor melpa :host github :repo "kosh04/unicode-escape.el" :package "unicode-escape" :local-repo "unicode-escape.el")) "names" ("2019-08-02 21:16:48" ("emacs" "cl-lib") (:type git :flavor melpa :host github :repo "Malabarba/names" :package "names" :local-repo "names")) "markdown-mode" ("2019-08-02 21:16:48" ("emacs" "cl-lib") (:type git :flavor melpa :host github :repo "jrblevin/markdown-mode" :package "markdown-mode" :local-repo "markdown-mode")) "yatex" ("2019-08-02 21:16:48" nil (:type git :host github :repo "emacsmirror/yatex" :package "yatex" :local-repo "yatex")) "company-reftex" ("2019-08-02 21:16:48" ("emacs" "s" "company") (:type git :flavor melpa :host github :repo "TheBB/company-reftex" :package "company-reftex" :local-repo "company-reftex")) "ox-latex-subfigure" ("2019-08-02 21:16:49" ("emacs") (:type git :flavor melpa :host github :repo "linktohack/ox-latex-subfigure" :package "ox-latex-subfigure" :local-repo "ox-latex-subfigure")) "ox-bibtex-chinese" ("2019-08-02 19:26:57" ("emacs") (:type git :flavor melpa :files ("*.el" "bibtex-styles" "ox-bibtex-chinese-pkg.el") :host github :repo "tumashu/ox-bibtex-chinese" :package "ox-bibtex-chinese" :local-repo "ox-bibtex-chinese")) "bibtex-mode" ("2019-08-02 18:27:26" nil (:type git :host github :repo "emacsattic/bibtex-mode" :package "bibtex-mode" :local-repo "bibtex-mode")) "company-bibtex" ("2019-08-02 21:16:48" ("company" "cl-lib" "parsebib") (:type git :flavor melpa :host github :repo "gbgar/company-bibtex" :package "company-bibtex" :local-repo "company-bibtex")) "parsebib" ("2019-08-02 21:16:48" ("emacs") (:type git :flavor melpa :host github :repo "joostkremers/parsebib" :package "parsebib" :local-repo "parsebib")) "bibtex-utils" ("2019-08-02 18:39:05" nil (:type git :flavor melpa :host github :repo "plantarum/bibtex-utils" :package "bibtex-utils" :local-repo "bibtex-utils"))))

#s(hash-table size 65 test equal rehash-size 1.5 rehash-threshold 0.8125 data ("straight" ((straight-x straight-autoloads straight) (autoload (quote straight-get-recipe) "straight" "Interactively select a recipe from one of the recipe repositories.
All recipe repositories in `straight-recipe-repositories' will
first be cloned. After the recipe is selected, it will be copied
to the kill ring. With a prefix argument, first prompt for a
recipe repository to search. Only that repository will be
cloned.

From Lisp code, SOURCES should be a subset of the symbols in
`straight-recipe-repositories'. Only those recipe repositories
are cloned and searched. If it is nil or omitted, then the value
of `straight-recipe-repositories' is used. If SOURCES is the
symbol `interactive', then the user is prompted to select a
recipe repository, and a list containing that recipe repository
is used for the value of SOURCES. ACTION may be `copy' (copy
recipe to the kill ring), `insert' (insert at point), or nil (no
action, just return it).

(fn &optional SOURCES ACTION)" t nil) (autoload (quote straight-use-package) "straight" "Register, clone, build, and activate a package and its dependencies.
This is the main entry point to the functionality of straight.el.

MELPA-STYLE-RECIPE is either a symbol naming a package, or a list
whose car is a symbol naming a package and whose cdr is a
property list containing e.g. `:type', `:local-repo', `:files',
and VC backend specific keywords.

First, the package recipe is registered with straight.el. If
NO-CLONE is a function, then it is called with two arguments: the
package name as a string, and a boolean value indicating whether
the local repository for the package is available. In that case,
the return value of the function is used as the value of NO-CLONE
instead. In any case, if NO-CLONE is non-nil, then processing
stops here.

Otherwise, the repository is cloned, if it is missing. If
NO-BUILD is a function, then it is called with one argument: the
package name as a string. In that case, the return value of the
function is used as the value of NO-BUILD instead. In any case,
if NO-BUILD is non-nil, then processing halts here. Otherwise,
the package is built and activated. Note that if the package
recipe has a non-nil `:no-build' entry, then NO-BUILD is ignored
and processing always stops before building and activation
occurs.

CAUSE is a string explaining the reason why
`straight-use-package' has been called. It is for internal use
only, and is used to construct progress messages. INTERACTIVE is
non-nil if the function has been called interactively. It is for
internal use only, and is used to determine whether to show a
hint about how to install the package permanently.

Return non-nil if package was actually installed, and nil
otherwise (this can only happen if NO-CLONE is non-nil).

(fn MELPA-STYLE-RECIPE &optional NO-CLONE NO-BUILD CAUSE INTERACTIVE)" t nil) (autoload (quote straight-register-package) "straight" "Register a package without cloning, building, or activating it.
This function is equivalent to calling `straight-use-package'
with a non-nil argument for NO-CLONE. It is provided for
convenience. MELPA-STYLE-RECIPE is as for
`straight-use-package'.

(fn MELPA-STYLE-RECIPE)" nil nil) (autoload (quote straight-use-package-no-build) "straight" "Register and clone a package without building it.
This function is equivalent to calling `straight-use-package'
with nil for NO-CLONE but a non-nil argument for NO-BUILD. It is
provided for convenience. MELPA-STYLE-RECIPE is as for
`straight-use-package'.

(fn MELPA-STYLE-RECIPE)" nil nil) (autoload (quote straight-use-package-lazy) "straight" "Register, build, and activate a package if it is already cloned.
This function is equivalent to calling `straight-use-package'
with symbol `lazy' for NO-CLONE. It is provided for convenience.
MELPA-STYLE-RECIPE is as for `straight-use-package'.

(fn MELPA-STYLE-RECIPE)" nil nil) (autoload (quote straight-use-recipes) "straight" "Register a recipe repository using MELPA-STYLE-RECIPE.
This registers the recipe and builds it if it is already cloned.
Note that you probably want the recipe for a recipe repository to
include a non-nil `:no-build' property, to unconditionally
inhibit the build phase.

This function also adds the recipe repository to
`straight-recipe-repositories', at the end of the list.

(fn MELPA-STYLE-RECIPE)" nil nil) (autoload (quote straight-override-recipe) "straight" "Register MELPA-STYLE-RECIPE as a recipe override.
This puts it in `straight-recipe-overrides', depending on the
value of `straight-current-profile'.

(fn MELPA-STYLE-RECIPE)" nil nil) (autoload (quote straight-check-package) "straight" "Rebuild a PACKAGE if it has been modified.
PACKAGE is a string naming a package. Interactively, select
PACKAGE from the known packages in the current Emacs session
using `completing-read'. See also `straight-rebuild-package' and
`straight-check-all'.

(fn PACKAGE)" t nil) (autoload (quote straight-check-all) "straight" "Rebuild any packages that have been modified.
See also `straight-rebuild-all' and `straight-check-package'.
This function should not be called during init.

(fn)" t nil) (autoload (quote straight-rebuild-package) "straight" "Rebuild a PACKAGE.
PACKAGE is a string naming a package. Interactively, select
PACKAGE from the known packages in the current Emacs session
using `completing-read'. With prefix argument RECURSIVE, rebuild
all dependencies as well. See also `straight-check-package' and
`straight-rebuild-all'.

(fn PACKAGE &optional RECURSIVE)" t nil) (autoload (quote straight-rebuild-all) "straight" "Rebuild all packages.
See also `straight-check-all' and `straight-rebuild-package'.

(fn)" t nil) (autoload (quote straight-prune-build-cache) "straight" "Prune the build cache.
This means that only packages that were built in the last init
run and subsequent interactive session will remain; other
packages will have their build mtime information and any cached
autoloads discarded.

(fn)" nil nil) (autoload (quote straight-prune-build-directory) "straight" "Prune the build directory.
This means that only packages that were built in the last init
run and subsequent interactive session will remain; other
packages will have their build directories deleted.

(fn)" nil nil) (autoload (quote straight-prune-build) "straight" "Prune the build cache and build directory.
This means that only packages that were built in the last init
run and subsequent interactive session will remain; other
packages will have their build mtime information discarded and
their build directories deleted.

(fn)" t nil) (autoload (quote straight-normalize-package) "straight" "Normalize a PACKAGE's local repository to its recipe's configuration.
PACKAGE is a string naming a package. Interactively, select
PACKAGE from the known packages in the current Emacs session
using `completing-read'.

(fn PACKAGE)" t nil) (autoload (quote straight-normalize-all) "straight" "Normalize all packages. See `straight-normalize-package'.
Return a list of recipes for packages that were not successfully
normalized. If multiple packages come from the same local
repository, only one is normalized.

PREDICATE, if provided, filters the packages that are normalized.
It is called with the package name as a string, and should return
non-nil if the package should actually be normalized.

(fn &optional PREDICATE)" t nil) (autoload (quote straight-fetch-package) "straight" "Try to fetch a PACKAGE from the primary remote.
PACKAGE is a string naming a package. Interactively, select
PACKAGE from the known packages in the current Emacs session
using `completing-read'. With prefix argument FROM-UPSTREAM,
fetch not just from primary remote but also from upstream (for
forked packages).

(fn PACKAGE &optional FROM-UPSTREAM)" t nil) (autoload (quote straight-fetch-package-and-deps) "straight" "Try to fetch a PACKAGE and its (transitive) dependencies.
PACKAGE, its dependencies, their dependencies, etc. are fetched
from their primary remotes.

PACKAGE is a string naming a package. Interactively, select
PACKAGE from the known packages in the current Emacs session
using `completing-read'. With prefix argument FROM-UPSTREAM,
fetch not just from primary remote but also from upstream (for
forked packages).

(fn PACKAGE &optional FROM-UPSTREAM)" t nil) (autoload (quote straight-fetch-all) "straight" "Try to fetch all packages from their primary remotes.
With prefix argument FROM-UPSTREAM, fetch not just from primary
remotes but also from upstreams (for forked packages).

Return a list of recipes for packages that were not successfully
fetched. If multiple packages come from the same local
repository, only one is fetched.

PREDICATE, if provided, filters the packages that are fetched. It
is called with the package name as a string, and should return
non-nil if the package should actually be fetched.

(fn &optional FROM-UPSTREAM PREDICATE)" t nil) (autoload (quote straight-merge-package) "straight" "Try to merge a PACKAGE from the primary remote.
PACKAGE is a string naming a package. Interactively, select
PACKAGE from the known packages in the current Emacs session
using `completing-read'. With prefix argument FROM-UPSTREAM,
merge not just from primary remote but also from upstream (for
forked packages).

(fn PACKAGE &optional FROM-UPSTREAM)" t nil) (autoload (quote straight-merge-package-and-deps) "straight" "Try to merge a PACKAGE and its (transitive) dependencies.
PACKAGE, its dependencies, their dependencies, etc. are merged
from their primary remotes.

PACKAGE is a string naming a package. Interactively, select
PACKAGE from the known packages in the current Emacs session
using `completing-read'. With prefix argument FROM-UPSTREAM,
merge not just from primary remote but also from upstream (for
forked packages).

(fn PACKAGE &optional FROM-UPSTREAM)" t nil) (autoload (quote straight-merge-all) "straight" "Try to merge all packages from their primary remotes.
With prefix argument FROM-UPSTREAM, merge not just from primary
remotes but also from upstreams (for forked packages).

Return a list of recipes for packages that were not successfully
merged. If multiple packages come from the same local
repository, only one is merged.

PREDICATE, if provided, filters the packages that are merged. It
is called with the package name as a string, and should return
non-nil if the package should actually be merged.

(fn &optional FROM-UPSTREAM PREDICATE)" t nil) (autoload (quote straight-pull-package) "straight" "Try to pull a PACKAGE from the primary remote.
PACKAGE is a string naming a package. Interactively, select
PACKAGE from the known packages in the current Emacs session
using `completing-read'. With prefix argument FROM-UPSTREAM, pull
not just from primary remote but also from upstream (for forked
packages).

(fn PACKAGE &optional FROM-UPSTREAM)" t nil) (autoload (quote straight-pull-package-and-deps) "straight" "Try to pull a PACKAGE and its (transitive) dependencies.
PACKAGE, its dependencies, their dependencies, etc. are pulled
from their primary remotes.

PACKAGE is a string naming a package. Interactively, select
PACKAGE from the known packages in the current Emacs session
using `completing-read'. With prefix argument FROM-UPSTREAM,
pull not just from primary remote but also from upstream (for
forked packages).

(fn PACKAGE &optional FROM-UPSTREAM)" t nil) (autoload (quote straight-pull-all) "straight" "Try to pull all packages from their primary remotes.
With prefix argument FROM-UPSTREAM, pull not just from primary
remotes but also from upstreams (for forked packages).

Return a list of recipes for packages that were not successfully
pulled. If multiple packages come from the same local repository,
only one is pulled.

PREDICATE, if provided, filters the packages that are pulled. It
is called with the package name as a string, and should return
non-nil if the package should actually be pulled.

(fn &optional FROM-UPSTREAM PREDICATE)" t nil) (autoload (quote straight-push-package) "straight" "Push a PACKAGE to its primary remote, if necessary.
PACKAGE is a string naming a package. Interactively, select
PACKAGE from the known packages in the current Emacs session
using `completing-read'.

(fn PACKAGE)" t nil) (autoload (quote straight-push-all) "straight" "Try to push all packages to their primary remotes.

Return a list of recipes for packages that were not successfully
pushed. If multiple packages come from the same local repository,
only one is pushed.

PREDICATE, if provided, filters the packages that are normalized.
It is called with the package name as a string, and should return
non-nil if the package should actually be normalized.

(fn &optional PREDICATE)" t nil) (autoload (quote straight-freeze-versions) "straight" "Write version lockfiles for currently activated packages.
This implies first pushing all packages that have unpushed local
changes. If the package management system has been used since the
last time the init-file was reloaded, offer to fix the situation
by reloading the init-file again. If FORCE is
non-nil (interactively, if a prefix argument is provided), skip
all checks and write the lockfile anyway.

Currently, writing version lockfiles requires cloning all lazily
installed packages. Hopefully, this inconvenient requirement will
be removed in the future.

Multiple lockfiles may be written (one for each profile),
according to the value of `straight-profiles'.

(fn &optional FORCE)" t nil) (autoload (quote straight-thaw-versions) "straight" "Read version lockfiles and restore package versions to those listed.

(fn)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "straight" (quote ("straight-")))) (defvar straight-x-pinned-packages nil "List of pinned packages.") (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "straight-x" (quote ("straight-x-")))) (provide (quote straight-autoloads))) "bind-key" ((bind-key-autoloads bind-key) (autoload (quote bind-key) "bind-key" "Bind KEY-NAME to COMMAND in KEYMAP (`global-map' if not passed).

KEY-NAME may be a vector, in which case it is passed straight to
`define-key'. Or it may be a string to be interpreted as
spelled-out keystrokes, e.g., \"C-c C-z\". See documentation of
`edmacro-mode' for details.

COMMAND must be an interactive function or lambda form.

KEYMAP, if present, should be a keymap and not a quoted symbol.
For example:

  (bind-key \"M-h\" #'some-interactive-function my-mode-map)

If PREDICATE is non-nil, it is a form evaluated to determine when
a key should be bound. It must return non-nil in such cases.
Emacs can evaluate this form at any time that it does redisplay
or operates on menu data structures, so you should write it so it
can safely be called at any time.

(fn KEY-NAME COMMAND &optional KEYMAP PREDICATE)" nil t) (autoload (quote unbind-key) "bind-key" "Unbind the given KEY-NAME, within the KEYMAP (if specified).
See `bind-key' for more details.

(fn KEY-NAME &optional KEYMAP)" nil t) (autoload (quote bind-key*) "bind-key" "Similar to `bind-key', but overrides any mode-specific bindings.

(fn KEY-NAME COMMAND &optional PREDICATE)" nil t) (autoload (quote bind-keys) "bind-key" "Bind multiple keys at once.

Accepts keyword arguments:
:map MAP               - a keymap into which the keybindings should be
                         added
:prefix KEY            - prefix key for these bindings
:prefix-map MAP        - name of the prefix map that should be created
                         for these bindings
:prefix-docstring STR  - docstring for the prefix-map variable
:menu-name NAME        - optional menu string for prefix map
:filter FORM           - optional form to determine when bindings apply

The rest of the arguments are conses of keybinding string and a
function symbol (unquoted).

(fn &rest ARGS)" nil t) (autoload (quote bind-keys*) "bind-key" "

(fn &rest ARGS)" nil t) (autoload (quote describe-personal-keybindings) "bind-key" "Display all the personal keybindings defined by `bind-key'.

(fn)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "bind-key" (quote ("compare-keybindings" "get-binding-description" "bind-key" "personal-keybindings" "override-global-m")))) (provide (quote bind-key-autoloads))) "use-package" ((use-package-diminish use-package use-package-lint use-package-delight use-package-jump use-package-autoloads use-package-core use-package-ensure use-package-bind-key) (autoload (quote use-package-autoload-keymap) "use-package-bind-key" "Loads PACKAGE and then binds the key sequence used to invoke
this function to KEYMAP-SYMBOL. It then simulates pressing the
same key sequence a again, so that the next key pressed is routed
to the newly loaded keymap.

This function supports use-package's :bind-keymap keyword. It
works by binding the given key sequence to an invocation of this
function for a particular keymap. The keymap is expected to be
defined by the package. In this way, loading the package is
deferred until the prefix key sequence is pressed.

(fn KEYMAP-SYMBOL PACKAGE OVERRIDE)" nil nil) (autoload (quote use-package-normalize-binder) "use-package-bind-key" "

(fn NAME KEYWORD ARGS)" nil nil) (defalias (quote use-package-normalize/:bind) (quote use-package-normalize-binder)) (defalias (quote use-package-normalize/:bind*) (quote use-package-normalize-binder)) (defalias (quote use-package-autoloads/:bind) (quote use-package-autoloads-mode)) (defalias (quote use-package-autoloads/:bind*) (quote use-package-autoloads-mode)) (autoload (quote use-package-handler/:bind) "use-package-bind-key" "

(fn NAME KEYWORD ARGS REST STATE &optional BIND-MACRO)" nil nil) (defalias (quote use-package-normalize/:bind-keymap) (quote use-package-normalize-binder)) (defalias (quote use-package-normalize/:bind-keymap*) (quote use-package-normalize-binder)) (autoload (quote use-package-handler/:bind-keymap) "use-package-bind-key" "

(fn NAME KEYWORD ARGS REST STATE &optional OVERRIDE)" nil nil) (autoload (quote use-package-handler/:bind-keymap*) "use-package-bind-key" "

(fn NAME KEYWORD ARG REST STATE)" nil nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "use-package-bind-key" (quote ("use-package-handler/:bind*")))) (autoload (quote use-package) "use-package-core" "Declare an Emacs package by specifying a group of configuration options.

For full documentation, please see the README file that came with
this file.  Usage:

  (use-package package-name
     [:keyword [option]]...)

:init            Code to run before PACKAGE-NAME has been loaded.
:config          Code to run after PACKAGE-NAME has been loaded.  Note that
                 if loading is deferred for any reason, this code does not
                 execute until the lazy load has occurred.
:preface         Code to be run before everything except `:disabled'; this
                 can be used to define functions for use in `:if', or that
                 should be seen by the byte-compiler.

:mode            Form to be added to `auto-mode-alist'.
:magic           Form to be added to `magic-mode-alist'.
:magic-fallback  Form to be added to `magic-fallback-mode-alist'.
:interpreter     Form to be added to `interpreter-mode-alist'.

:commands        Define autoloads for commands that will be defined by the
                 package.  This is useful if the package is being lazily
                 loaded, and you wish to conditionally call functions in your
                 `:init' block that are defined in the package.
:hook            Specify hook(s) to attach this package to.

:bind            Bind keys, and define autoloads for the bound commands.
:bind*           Bind keys, and define autoloads for the bound commands,
                 *overriding all minor mode bindings*.
:bind-keymap     Bind a key prefix to an auto-loaded keymap defined in the
                 package.  This is like `:bind', but for keymaps.
:bind-keymap*    Like `:bind-keymap', but overrides all minor mode bindings

:defer           Defer loading of a package -- this is implied when using
                 `:commands', `:bind', `:bind*', `:mode', `:magic', `:hook',
                 `:magic-fallback', or `:interpreter'.  This can be an integer,
                 to force loading after N seconds of idle time, if the package
                 has not already been loaded.
:after           Defer loading of a package until after any of the named
                 features are loaded.
:demand          Prevent deferred loading in all cases.

:if EXPR         Initialize and load only if EXPR evaluates to a non-nil value.
:disabled        The package is ignored completely if this keyword is present.
:defines         Declare certain variables to silence the byte-compiler.
:functions       Declare certain functions to silence the byte-compiler.
:load-path       Add to the `load-path' before attempting to load the package.
:diminish        Support for diminish.el (if installed).
:delight         Support for delight.el (if installed).
:custom          Call `customize-set-variable' with each variable definition.
:custom-face     Call `customize-set-faces' with each face definition.
:ensure          Loads the package using package.el if necessary.
:pin             Pin the package to an archive.

(fn NAME &rest ARGS)" nil t) (function-put (quote use-package) (quote lisp-indent-function) (quote 1)) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "use-package-core" (quote ("use-package-")))) (autoload (quote use-package-normalize/:delight) "use-package-delight" "Normalize arguments to delight.

(fn NAME KEYWORD ARGS)" nil nil) (autoload (quote use-package-handler/:delight) "use-package-delight" "

(fn NAME KEYWORD ARGS REST STATE)" nil nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "use-package-delight" (quote ("use-package-normalize-delight")))) (autoload (quote use-package-normalize/:diminish) "use-package-diminish" "

(fn NAME KEYWORD ARGS)" nil nil) (autoload (quote use-package-handler/:diminish) "use-package-diminish" "

(fn NAME KEYWORD ARG REST STATE)" nil nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "use-package-diminish" (quote ("use-package-normalize-diminish")))) (autoload (quote use-package-normalize/:ensure) "use-package-ensure" "

(fn NAME KEYWORD ARGS)" nil nil) (autoload (quote use-package-handler/:ensure) "use-package-ensure" "

(fn NAME KEYWORD ENSURE REST STATE)" nil nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "use-package-ensure" (quote ("use-package-")))) (autoload (quote use-package-jump-to-package-form) "use-package-jump" "Attempt to find and jump to the `use-package' form that loaded
PACKAGE. This will only find the form if that form actually
required PACKAGE. If PACKAGE was previously required then this
function will jump to the file that originally required PACKAGE
instead.

(fn PACKAGE)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "use-package-jump" (quote ("use-package-find-require")))) (autoload (quote use-package-lint) "use-package-lint" "Check for errors in use-package declarations.
For example, if the module's `:if' condition is met, but even
with the specified `:load-path' the module cannot be found.

(fn)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "use-package-lint" (quote ("use-package-lint-declaration")))) (provide (quote use-package-autoloads))) "init-loader" ((init-loader-autoloads init-loader) (autoload (quote init-loader-load) "init-loader" "Load configuration files in INIT-DIR.

(fn &optional (init-dir init-loader-directory))" nil nil) (autoload (quote init-loader-show-log) "init-loader" "Show init-loader log buffer.

(fn)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "init-loader" (quote ("init-loader-")))) (provide (quote init-loader-autoloads))) "company" ((company-dabbrev-code company-tempo company-gtags company-elisp company-autoloads company-etags company-ispell company-capf company-yasnippet company-template company-nxml company-css company-clang company company-files company-xcode company-abbrev company-keywords company-cmake company-semantic company-eclim company-tng company-bbdb company-oddmuse company-dabbrev) (autoload (quote company-mode) "company" "\"complete anything\"; is an in-buffer completion framework.
Completion starts automatically, depending on the values
`company-idle-delay' and `company-minimum-prefix-length'.

Completion can be controlled with the commands:
`company-complete-common', `company-complete-selection', `company-complete',
`company-select-next', `company-select-previous'.  If these commands are
called before `company-idle-delay', completion will also start.

Completions can be searched with `company-search-candidates' or
`company-filter-candidates'.  These can be used while completion is
inactive, as well.

The completion data is retrieved using `company-backends' and displayed
using `company-frontends'.  If you want to start a specific backend, call
it interactively or use `company-begin-backend'.

By default, the completions list is sorted alphabetically, unless the
backend chooses otherwise, or `company-transformers' changes it later.

regular keymap (`company-mode-map'):

\\{company-mode-map}
keymap during active completions (`company-active-map'):

\\{company-active-map}

(fn &optional ARG)" t nil) (defvar global-company-mode nil "Non-nil if Global Company mode is enabled.
See the `global-company-mode' command
for a description of this minor mode.
Setting this variable directly does not take effect;
either customize it (see the info node `Easy Customization')
or call the function `global-company-mode'.") (custom-autoload (quote global-company-mode) "company" nil) (autoload (quote global-company-mode) "company" "Toggle Company mode in all buffers.
With prefix ARG, enable Global Company mode if ARG is positive;
otherwise, disable it.  If called from Lisp, enable the mode if
ARG is omitted or nil.

Company mode is enabled in all buffers where
`company-mode-on' would do it.
See `company-mode' for more information on Company mode.

(fn &optional ARG)" t nil) (autoload (quote company-manual-begin) "company" "

(fn)" t nil) (autoload (quote company-complete) "company" "Insert the common part of all candidates or the current selection.
The first time this is called, the common part is inserted, the second
time, or when the selection has been changed, the selected candidate is
inserted.

(fn)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company" (quote ("company-")))) (autoload (quote company-abbrev) "company-abbrev" "`company-mode' completion backend for abbrev.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-abbrev" (quote ("company-abbrev-insert")))) (autoload (quote company-bbdb) "company-bbdb" "`company-mode' completion backend for BBDB.

(fn COMMAND &optional ARG &rest IGNORE)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-bbdb" (quote ("company-bbdb-")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-capf" (quote ("company-")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-clang" (quote ("company-clang")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-cmake" (quote ("company-cmake")))) (autoload (quote company-css) "company-css" "`company-mode' completion backend for `css-mode'.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-css" (quote ("company-css-")))) (autoload (quote company-dabbrev) "company-dabbrev" "dabbrev-like `company-mode' completion backend.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-dabbrev" (quote ("company-dabbrev-")))) (autoload (quote company-dabbrev-code) "company-dabbrev-code" "dabbrev-like `company-mode' backend for code.
The backend looks for all symbols in the current buffer that aren't in
comments or strings.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-dabbrev-code" (quote ("company-dabbrev-code-")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-eclim" (quote ("company-eclim")))) (autoload (quote company-elisp) "company-elisp" "`company-mode' completion backend for Emacs Lisp.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-elisp" (quote ("company-elisp-")))) (autoload (quote company-etags) "company-etags" "`company-mode' completion backend for etags.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-etags" (quote ("company-etags-")))) (autoload (quote company-files) "company-files" "`company-mode' completion backend existing file names.
Completions works for proper absolute and relative files paths.
File paths with spaces are only supported inside strings.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-files" (quote ("company-file")))) (autoload (quote company-gtags) "company-gtags" "`company-mode' completion backend for GNU Global.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-gtags" (quote ("company-gtags-")))) (autoload (quote company-ispell) "company-ispell" "`company-mode' completion backend using Ispell.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-ispell" (quote ("company-ispell-")))) (autoload (quote company-keywords) "company-keywords" "`company-mode' backend for programming language keywords.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-keywords" (quote ("company-keywords-")))) (autoload (quote company-nxml) "company-nxml" "`company-mode' completion backend for `nxml-mode'.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-nxml" (quote ("company-nxml-")))) (autoload (quote company-oddmuse) "company-oddmuse" "`company-mode' completion backend for `oddmuse-mode'.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-oddmuse" (quote ("company-oddmuse-")))) (autoload (quote company-semantic) "company-semantic" "`company-mode' completion backend using CEDET Semantic.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-semantic" (quote ("company-semantic-")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-template" (quote ("company-template-")))) (autoload (quote company-tempo) "company-tempo" "`company-mode' completion backend for tempo.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-tempo" (quote ("company-tempo-")))) (autoload (quote company-tng-frontend) "company-tng" "When the user changes the selection at least once, this
frontend will display the candidate in the buffer as if it's
already there and any key outside of `company-active-map' will
confirm the selection and finish the completion.

(fn COMMAND)" nil nil) (autoload (quote company-tng-configure-default) "company-tng" "Applies the default configuration to enable company-tng.

(fn)" nil nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-tng" (quote ("company-tng--")))) (autoload (quote company-xcode) "company-xcode" "`company-mode' completion backend for Xcode projects.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-xcode" (quote ("company-xcode-")))) (autoload (quote company-yasnippet) "company-yasnippet" "`company-mode' backend for `yasnippet'.

This backend should be used with care, because as long as there are
snippets defined for the current major mode, this backend will always
shadow backends that come after it.  Recommended usages:

* In a buffer-local value of `company-backends', grouped with a backend or
  several that provide actual text completions.

  (add-hook 'js-mode-hook
            (lambda ()
              (set (make-local-variable 'company-backends)
                   '((company-dabbrev-code company-yasnippet)))))

* After keyword `:with', grouped with other backends.

  (push '(company-semantic :with company-yasnippet) company-backends)

* Not in `company-backends', just bound to a key.

  (global-set-key (kbd \"C-c y\") 'company-yasnippet)

(fn COMMAND &optional ARG &rest IGNORE)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-yasnippet" (quote ("company-yasnippet--")))) (provide (quote company-autoloads))) "org-doing" ((org-doing org-doing-autoloads) (autoload (quote org-doing-log) "org-doing" "Logs the `description' of what you're doing now in the file
`org-doing-file' at the *top* of the file.

When `later-p' is true, logs the item as something to be done
later.

(fn DESCRIPTION &optional LATER-P)" t nil) (autoload (quote org-doing) "org-doing" "Interactive function for running any org-doing command.

The first part of the `command' string is parsed as a command:
- now: calls `org-doing-log'
- later: calls `org-doing-log'
- done: calls `org-doing-done'
- next: used alone, calls `org-doing-start-next'
        otherwise calls `org-doing-log'

If no match is found, `org-doing-log' is called and passed the entire
command string.

(fn COMMAND)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "org-doing" (quote ("org-doing-" "initialize-org-doing-buffer" "with-org-doing-file")))) (provide (quote org-doing-autoloads))) "cl-lib" ((cl-lib cl-lib-autoloads) (let ((d (file-name-directory "/Users/hotman/.emacs.d/straight/build/cl-lib/cl-lib-autoloads.el"))) (when (member d load-path) (setq load-path (append (remove d load-path) (list d))))) (provide (quote cl-lib-autoloads))) "dash" ((dash dash-autoloads) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "dash" (quote ("dash-" "-keep" "-butlast" "-non" "-only-some" "-zip" "-e" "->" "-a" "-gr" "-when-let" "-d" "-l" "-s" "-p" "-r" "-m" "-i" "-f" "-u" "-value-to-list" "-t" "--" "-c" "!cons" "!cdr")))) (provide (quote dash-autoloads))) "s" ((s s-autoloads) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "s" (quote ("s-")))) (provide (quote s-autoloads))) "names" ((names-autoloads names names-dev) (defvar names--inside-make-autoload nil "Used in `make-autoload' to indicate we're making autoloads.") (autoload (quote define-namespace) "names" "Inside the namespace NAME, execute BODY.
NAME can be any symbol (not quoted), but it's highly recommended
to use some form of separator (such as :, /, or -). For a
complete description of this macro, please visit the frontpage
with \\[names-view-manual].

In summary, this macro has two main effects:

1. Any definitions inside BODY will have NAME prepended to the
symbol given. Ex:

    (define-namespace foo-
    (defvar bar 1 \"docs\")
    )

expands to

    (defvar foo-bar 1 \"docs\")


2. Any function calls and variable names get NAME prepended to
them if such a variable or function exists. Ex:

    (define-namespace foo:
    (defun message (x y) nil)
    (message \"%s\" my-var)
    )

expands to

    (defun foo:message (x y) nil)
    (foo:message \"%s\" my-var)

Note how `message' is expanded to `foo:message' in the second
form, because that function exists. Meanwhile, `bar' is left
untouched because `foo:bar' is not a known variable name.

===============================

AUTOLOAD

In order for `define-namespace' to work with \";;;###autoload\"
comments must replace all instances of \";;;###autoload\" inside
your `define-namespace' with `:autoload'.
Afterwards, add an \";;;###autoload\" comment just above your
`define-namespace'.

===============================

KEYWORDS

Immediately after NAME you may add keywords which customize the
behaviour of `define-namespace'. For a list of possible keywords
and a description of their effects, see the variable
`names--keyword-list'.

(fn NAME [KEYWORD ...] BODY)" nil t) (function-put (quote define-namespace) (quote lisp-indent-function) (quote (lambda (&rest x) 0))) (eval-after-load (quote find-func) (quote (defadvice find-function-search-for-symbol (around names-around-find-function-search-for-symbol-advice (symbol type library) activate) "Make sure `find-function-search-for-symbol' understands namespaces." ad-do-it (ignore-errors (unless (cdr ad-return-value) (with-current-buffer (car ad-return-value) (search-forward-regexp "^(define-namespace\\_>") (skip-chars-forward "
[:blank:]") (let* ((names--regexp (concat "\\`" (regexp-quote (symbol-name (read (current-buffer)))))) (short-symbol (let ((name (symbol-name symbol))) (when (string-match names--regexp name) (intern (replace-match "" nil nil name)))))) (when short-symbol (ad-set-arg 0 short-symbol) ad-do-it)))))))) (defadvice make-autoload (around names-before-make-autoload-advice (form file &optional expansion) activate) "Make sure `make-autoload' understands `define-namespace'.
Use the `names--inside-make-autoload' variable to indicate to
`define-namespace' that we're generating autoloads." (require (quote names)) (if (null (eq (car-safe form) (quote define-namespace))) ad-do-it (setq names--inside-make-autoload t) (setq form (macroexpand form)) (setq names--inside-make-autoload nil) (if (version< emacs-version "24.3") (setq ad-return-value (cons (quote progn) (mapcar (lambda (x) (names--make-autoload-compat x file)) (cdr form)))) (ad-set-arg 2 (quote expansion)) (ad-set-arg 0 form) ad-do-it))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "names" (quote ("names-")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "names-dev" (quote ("names-" "find-function-read")))) (provide (quote names-autoloads))) "unicode-escape" ((unicode-escape unicode-escape-autoloads) (autoload (quote unicode-escape) "unicode-escape" nil nil nil) (autoload (quote unicode-escape*) "unicode-escape" nil nil nil) (autoload (quote unicode-unescape) "unicode-escape" nil nil nil) (autoload (quote unicode-unescape*) "unicode-escape" nil nil nil) (autoload (quote unicode-escape-region) "unicode-escape" nil nil nil) (autoload (quote unicode-unescape-region) "unicode-escape" nil nil nil) (provide (quote unicode-escape-autoloads))) "company-tabnine" ((company-tabnine company-tabnine-autoloads) (autoload (quote company-tabnine) "company-tabnine" "`company-mode' backend for TabNine.

See documentation of `company-backends' for details.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-tabnine" (quote ("company-tabnine-")))) (provide (quote company-tabnine-autoloads))) "markdown-mode" ((markdown-mode markdown-mode-autoloads) (autoload (quote markdown-mode) "markdown-mode" "Major mode for editing Markdown files.

(fn)" t nil) (add-to-list (quote auto-mode-alist) (quote ("\\.markdown\\'" . markdown-mode))) (add-to-list (quote auto-mode-alist) (quote ("\\.md\\'" . markdown-mode))) (autoload (quote gfm-mode) "markdown-mode" "Major mode for editing GitHub Flavored Markdown files.

(fn)" t nil) (autoload (quote markdown-view-mode) "markdown-mode" "Major mode for viewing Markdown content.

(fn)" t nil) (autoload (quote gfm-view-mode) "markdown-mode" "Major mode for viewing GitHub Flavored Markdown content.

(fn)" t nil) (autoload (quote markdown-live-preview-mode) "markdown-mode" "Toggle native previewing on save for a specific markdown file.

(fn &optional ARG)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "markdown-mode" (quote ("gfm-" "markdown" "defun-markdown-")))) (provide (quote markdown-mode-autoloads))) "yatex" ((yahtml yatexadd yatexenv yatexgen yatexlib yatex19 yatexhks yatexflt yatex-autoloads yatexprc yatexhie yatex23 yatexinf yatexsec yatexpkg yatexm-o yatexmth yatex yatexhlp) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yahtml" (quote ("yahtml")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatex" (quote ("yatex-mode" "YaTeX-" "tex-" "tmp-" "user-" "section-table" "singlecmd-table" "LaTeX2e-fontstyle-alist" "fontsize-table" "env-table" "NTT-jTeX" "latex-" "dvi" "makeindex-command" "bibtex-command")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatex19" (quote ("YaTeX-" "hilit-patterns-alist")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatex23" (quote ("YaTeX-")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexadd" (quote ("YaTeX")))) (autoload (quote YaTeX-what-column) "yatexenv" "Show which kind of column the current position is belonging to.

(fn)" t nil) (autoload (quote YaTeX-intelligent-newline) "yatexenv" "Insert newline and environment-specific entry.
`\\item'	for some itemizing environment,
`\\> \\> \\'	for tabbing environemnt,
`& & \\ hline'	for tabular environment.

(fn ARG)" t nil) (autoload (quote YaTeX-indent-line-equation) "yatexenv" "Indent a line in equation family.

(fn)" nil nil) (autoload (quote YaTeX-goto-corresponding-leftright) "yatexenv" "Go to corresponding left or ight.

(fn)" nil nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexenv" (quote ("YaTeX-")))) (autoload (quote YaTeX-filter-goto-source) "yatexflt" "Go to corresponding text source of the graphic file

(fn FILE OTHER-WIN)" nil nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexflt" (quote ("YaTeX-")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexgen" (quote ("YaTeX-")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexhie" (quote ("YaTeX-")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexhks" (quote ("YaTeX-browse-info")))) (autoload (quote YaTeX-apropos) "yatexhlp" "

(fn KEY)" t nil) (autoload (quote YaTeX-help) "yatexhlp" "Show help buffer of LaTeX/TeX commands or macros.
Optional argument MACRO, if supplied, is directly selected to keyword.
Non-nil for optional second argument REF-ONLY inhibits call enrich-help
for non-interactive use.

(fn &optional MACRO REF-ONLY)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexhlp" (quote ("YaTeX-")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexinf" (quote ("yatexinfo-")))) (autoload (quote YaTeX-kanji-ptex-mnemonic) "yatexlib" "Return the kanji-mnemonic of pTeX from current buffer's coding-system.

(fn)" nil nil) (autoload (quote YaTeX-define-key) "yatexlib" "Define key on YaTeX-prefix-map.

(fn KEY BINDING &optional MAP)" nil nil) (autoload (quote YaTeX-local-table-symbol) "yatexlib" "Return the lisp symbol which keeps local completion table of SYMBOL.

(fn SYMBOL)" nil nil) (autoload (quote YaTeX-sync-local-table) "yatexlib" "Synchronize local variable SYMBOL.
Copy its corresponding directory dependent completion table to SYMBOL.

(fn SYMBOL)" nil nil) (autoload (quote YaTeX-read-user-completion-table) "yatexlib" "Append user completion table of LaTeX macros

(fn &optional FORCETOREAD)" t nil) (autoload (quote YaTeX-reload-dictionary) "yatexlib" "Reload local dictionary.
Use this function after editing ./.yatexrc.

(fn)" t nil) (autoload (quote YaTeX-lookup-table) "yatexlib" "Lookup WORD in completion table whose type is TYPE.
This function refers the symbol tmp-TYPE-table, user-TYPE-table, TYPE-table.
Typically, TYPE is one of 'env, 'section, 'fontsize, 'singlecmd.

(fn WORD TYPE)" nil nil) (autoload (quote YaTeX-update-table) "yatexlib" "Update completion table if the car of VALLIST is not in current tables.
Second argument DEFAULT-TABLE is the quoted symbol of default completion
table, third argument USER-TABLE is user table which will be saved in
YaTeX-user-completion-table, fourth argument LOCAL-TABLE should have the
completion which is valid during current Emacs's session.  If you
want to make LOCAL-TABLE valid longer span (but restrict in this directory)
create the file in current directory which has the same name with
YaTeX-user-completion-table.

(fn VALLIST DEFAULT-TABLE USER-TABLE LOCAL-TABLE)" nil nil) (autoload (quote YaTeX-cplread-with-learning) "yatexlib" "Completing read with learning.
Do a completing read with prompt PROM.  Completion table is what
DEFAULT-TABLE, USER-TABLE, LOCAL table are appended in reverse order.
Note that these tables are passed by the symbol.
Optional arguments PRED, REQMATH and INIT are passed to completing-read
as its arguments PREDICATE, REQUIRE-MATCH and INITIAL-INPUT respectively.
If optional 8th argument HSYM, history symbol, is passed, use it as
history list variable.

(fn PROM DEFAULT-TABLE USER-TABLE LOCAL-TABLE &optional PRED REQMATCH INIT HSYM)" nil nil) (autoload (quote YaTeX-update-dictionary) "yatexlib" "

(fn FILE SYMBOL &optional TYPE)" nil nil) (autoload (quote YaTeX-define-begend-key-normal) "yatexlib" "Define short cut YaTeX-make-begin-end key.

(fn KEY ENV &optional MAP)" nil nil) (autoload (quote YaTeX-define-begend-region-key) "yatexlib" "Define short cut YaTeX-make-begin-end-region key.

(fn KEY ENV &optional MAP)" nil nil) (autoload (quote YaTeX-define-begend-key) "yatexlib" "Define short cut key for begin type completion.
Define both strokes for normal and region mode.
To customize YaTeX, user should use this function.

(fn KEY ENV &optional MAP)" nil nil) (autoload (quote YaTeX-search-active-forward) "yatexlib" "Search STRING which is not commented out by CMNTRX.
Optional arguments after BOUND, ERR, CNT are passed literally to search-forward
or search-backward.
Optional sixth argument FUNC changes search-function.

(fn STRING CMNTRX &optional BOUND ERR CNT FUNC)" nil nil) (autoload (quote YaTeX-switch-to-buffer) "yatexlib" "Switch to buffer if buffer exists, find file if not.
Optional second arg SETBUF t make use set-buffer instead of switch-to-buffer.

(fn FILE &optional SETBUF)" t nil) (autoload (quote YaTeX-switch-to-buffer-other-window) "yatexlib" "Switch to buffer if buffer exists, find file if not.

(fn FILE)" t nil) (autoload (quote YaTeX-replace-format) "yatexlib" "In STRING, replace first appearance of FORMAT to REPL as if
function `format' does.  FORMAT does not contain `%'

(fn STRING FORMAT REPL)" nil nil) (autoload (quote YaTeX-replace-formats) "yatexlib" "

(fn STRING REPLACE-LIST)" nil nil) (autoload (quote YaTeX-replace-format-args) "yatexlib" "Translate the argument mark #1, #2, ... #n in the STRING into the
corresponding real arguments ARGS.

(fn STRING &rest ARGS)" nil nil) (autoload (quote rindex) "yatexlib" "Return the last position of STRING where character CHAR found.

(fn STRING CHAR)" nil nil) (autoload (quote point-beginning-of-line) "yatexlib" "

(fn)" nil nil) (autoload (quote point-end-of-line) "yatexlib" "

(fn)" nil nil) (autoload (quote YaTeX-showup-buffer) "yatexlib" "Make BUFFER show up in certain window (but current window)
that gives the maximum value by the FUNC.  FUNC should take an argument
of its window object.  Non-nil for optional third argument SELECT selects
that window.  This function never selects minibuffer window.

(fn BUFFER &optional FUNC SELECT)" nil nil) (autoload (quote split-window-calculate-height) "yatexlib" "Split current window wight specified HEIGHT.
If HEIGHT is number, make a new window that has HEIGHT lines.
If HEIGHT is string, make a new window that occupies HEIGT % of screen height.
Otherwise split window conventionally.

(fn HEIGHT)" nil nil) (autoload (quote YaTeX-window-list) "yatexlib" "

(fn)" nil nil) (autoload (quote substitute-all-key-definition) "yatexlib" "Replace recursively OLDDEF with NEWDEF for any keys in KEYMAP now
defined as OLDDEF. In other words, OLDDEF is replaced with NEWDEF
where ever it appears.

(fn OLDDEF NEWDEF KEYMAP)" nil nil) (autoload (quote YaTeX-match-string) "yatexlib" "Return (buffer-substring (match-beginning n) (match-beginning m)).

(fn N &optional M)" nil nil) (autoload (quote YaTeX-minibuffer-complete) "yatexlib" "Complete in minibuffer.
  If the symbol 'delim is bound and is string, its value is assumed to be
the character class of delimiters.  Completion will be performed on
the last field separated by those delimiters.
  If the symbol 'quick is bound and is 't, when the try-completion results
in t, exit minibuffer immediately.

(fn)" t nil) (autoload (quote completing-read-with-history) "yatexlib" "Completing read with general history: gmhist, Emacs-19.

(fn PROMPT TABLE &optional PREDICATE MUST-MATCH INITIAL HSYM)" nil nil) (autoload (quote read-from-minibuffer-with-history) "yatexlib" "Read from minibuffer with general history: gmhist, Emacs-19.

(fn PROMPT &optional INIT MAP READ HSYM)" nil nil) (autoload (quote read-string-with-history) "yatexlib" "Read string with history: gmhist(Emacs-18) and Emacs-19.

(fn PROMPT &optional INIT HSYM)" nil nil) (fset (quote YaTeX-rassoc) (if (and nil (fboundp (quote rassoc)) (subrp (symbol-function (quote rassoc)))) (symbol-function (quote rassoc)) (function (lambda (key list) (let ((l list)) (catch (quote found) (while l (if (equal key (cdr (car l))) (throw (quote found) (car l))) (setq l (cdr l))))))))) (autoload (quote YaTeX-delete1) "yatexlib" "Delete

(fn ELT LIST)" nil nil) (fset (quote YaTeX-last-key) (if (fboundp (quote win:last-key)) (quote win:last-key) (function (lambda nil (if (boundp (quote last-command-char)) last-command-char last-command-event))))) (autoload (quote YaTeX-command-to-string) "yatexlib" "

(fn CMD)" nil nil) (autoload (quote YaTeX-reindent) "yatexlib" "Remove current indentation and reindento to COL column.

(fn COL)" nil nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexlib" (quote ("tfb-and-exit" "bcf-and-exit" "YaTeX-" "goto-buffer-window" "foreach-buffers" "latex-message-kanji-code")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexm-o" (quote ("yatex-mode-")))) (autoload (quote YaTeX-toggle-math-mode) "yatexmth" "

(fn &optional ARG)" t nil) (autoload (quote YaTeX-goto-corresponding-paren) "yatexmth" "Go to corresponding mathematical parentheses.

(fn)" nil nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexmth" (quote ("YaTeX-")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexpkg" (quote ("YaTeX-package-")))) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexprc" (quote ("YaTeX-")))) (autoload (quote YaTeX-read-section-in-minibuffer) "yatexsec" "

(fn PROMPT TABLE &optional DEFAULT DELIM)" t nil) (autoload (quote YaTeX-make-section-with-overview) "yatexsec" "Input sectining command with previous overview.

(fn)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "yatexsec" (quote ("YaTeX-")))) (provide (quote yatex-autoloads))) "company-reftex" ((company-reftex-autoloads company-reftex) (autoload (quote company-reftex-citations) "company-reftex" "Company backend for LaTeX citations, powered by reftex.
For more information on COMMAND and ARG see `company-backends'.

(fn COMMAND &optional ARG &rest _)" t nil) (autoload (quote company-reftex-labels) "company-reftex" "Company backend for LaTeX labels, powered by reftex.
For more information on COMMAND and ARG see `company-backends'.

(fn COMMAND &optional ARG &rest _)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-reftex" (quote ("company-reftex-")))) (provide (quote company-reftex-autoloads))) "ox-latex-subfigure" ((ox-latex-subfigure-autoloads ox-latex-subfigure) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "ox-latex-subfigure" (quote ("ox-latex-subfigure-")))) (provide (quote ox-latex-subfigure-autoloads))) "ox-bibtex-chinese" ((ox-bibtex-chinese-autoloads ox-bibtex-chinese-pkg ox-bibtex-chinese) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "ox-bibtex-chinese" (quote ("ox-bibtex-chinese-")))) (provide (quote ox-bibtex-chinese-autoloads))) "bibtex-mode" ((bibtex-mode bibtex-mode-autoloads) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "bibtex-mode" (quote ("beginning-of-" "bibtex-" "assoc-string-equalp" "find-bibtex-" "validate-bibtex-buffer" "map-bibtex-entries" "string-equalp" "skip-whitespace-and-comments" "sort-bibtex-entries" "hide-bibtex-entry-bodies" "narrow-to-bibtex-entry" "ispell-" "end-of-bibtex-entry" "put-string-on-kill-ring")))) (provide (quote bibtex-mode-autoloads))) "parsebib" ((parsebib-autoloads parsebib) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "parsebib" (quote ("parsebib-")))) (provide (quote parsebib-autoloads))) "company-bibtex" ((company-bibtex company-bibtex-autoloads) (autoload (quote company-bibtex) "company-bibtex" "`company-mode' completion backend for bibtex key completion.

This backend activates for citation styles used by `pandoc-mode' (@),
`latex-mode' (cite{}), and `org-mode' (ebib:), and reads from a
bibliography file or files specified in `company-bibtex-bibliography'.
COMMAND, ARG, and IGNORED are used by `company-mode'.

(fn COMMAND &optional ARG &rest IGNORED)" t nil) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "company-bibtex" (quote ("company-bibtex-")))) (provide (quote company-bibtex-autoloads))) "bibtex-utils" ((bibtex-utils-autoloads bibtex-utils) (if (fboundp (quote register-definition-prefixes)) (register-definition-prefixes "bibtex-utils" (quote ("bibtex-search-m" "bu-")))) (provide (quote bibtex-utils-autoloads)))))

#s(hash-table size 65 test eq rehash-size 1.5 rehash-threshold 0.8125 data (org-elpa #s(hash-table size 65 test equal rehash-size 1.5 rehash-threshold 0.8125 data (version 1 "use-package" nil "bind-key" nil "init-loader" nil "evil-evilified-state" nil "company" nil "org-doing" nil "company-tabnine" nil "cl-lib" nil "dash" nil "s" nil "unicode-escape" nil "names" nil "markdown-mode" nil "yatex" nil "company-reftex" nil "ox-latex" nil "ox-latex-subfigure" nil "ox-bibtex-chinese" nil "bibtex-mode" nil "reftex-mode" nil "company-bibtex" nil "parsebib" nil "bibtex-utils" nil "ox-bibtex" nil)) melpa #s(hash-table size 65 test equal rehash-size 1.5 rehash-threshold 0.8125 data (version 2 "use-package" (use-package :type git :flavor melpa :files (:defaults (:exclude "bind-key.el" "bind-chord.el" "use-package-chords.el" "use-package-ensure-system-package.el") "use-package-pkg.el") :host github :repo "jwiegley/use-package") "bind-key" (bind-key :type git :flavor melpa :files ("bind-key.el" "bind-key-pkg.el") :host github :repo "jwiegley/use-package") "init-loader" (init-loader :type git :flavor melpa :files ("init-loader.el" "init-loader-pkg.el") :host github :repo "emacs-jp/init-loader") "evil-evilified-state" nil "company" (company :type git :flavor melpa :host github :repo "company-mode/company-mode") "org-doing" (org-doing :type git :flavor melpa :files (:defaults "bin" "org-doing-pkg.el") :host github :repo "rudolfolah/org-doing") "company-tabnine" (company-tabnine :type git :flavor melpa :host github :repo "TommyX12/company-tabnine") "cl-lib" nil "dash" (dash :type git :flavor melpa :files ("dash.el" "dash-pkg.el") :host github :repo "magnars/dash.el") "s" (s :type git :flavor melpa :files ("s.el" "s-pkg.el") :host github :repo "magnars/s.el") "unicode-escape" (unicode-escape :type git :flavor melpa :host github :repo "kosh04/unicode-escape.el") "names" (names :type git :flavor melpa :host github :repo "Malabarba/names") "markdown-mode" (markdown-mode :type git :flavor melpa :host github :repo "jrblevin/markdown-mode") "yatex" nil "company-reftex" (company-reftex :type git :flavor melpa :host github :repo "TheBB/company-reftex") "ox-latex" nil "ox-latex-subfigure" (ox-latex-subfigure :type git :flavor melpa :host github :repo "linktohack/ox-latex-subfigure") "ox-bibtex-chinese" (ox-bibtex-chinese :type git :flavor melpa :files ("*.el" "bibtex-styles" "ox-bibtex-chinese-pkg.el") :host github :repo "tumashu/ox-bibtex-chinese") "bibtex-mode" nil "reftex-mode" nil "company-bibtex" (company-bibtex :type git :flavor melpa :host github :repo "gbgar/company-bibtex") "parsebib" (parsebib :type git :flavor melpa :host github :repo "joostkremers/parsebib") "bibtex-utils" (bibtex-utils :type git :flavor melpa :host github :repo "plantarum/bibtex-utils") "ox-bibtex" nil)) gnu-elpa-mirror #s(hash-table size 65 test equal rehash-size 1.5 rehash-threshold 0.8125 data (version 1 "evil-evilified-state" nil "cl-lib" (cl-lib :type git :host github :repo "emacs-straight/cl-lib") "yatex" nil "ox-latex" nil "bibtex-mode" nil "reftex-mode" nil "ox-bibtex" nil)) emacsmirror #s(hash-table size 65 test equal rehash-size 1.5 rehash-threshold 0.8125 data (version 1 "evil-evilified-state" nil "yatex" (yatex :type git :host github :repo "emacsmirror/yatex") "ox-latex" nil "bibtex-mode" (bibtex-mode :type git :host github :repo "emacsattic/bibtex-mode") "reftex-mode" nil "ox-bibtex" nil))))

("org-elpa" "melpa" "gnu-elpa-mirror" "emacsmirror" "straight" "emacs" "use-package" "bind-key" "markdown-mode" "cl-lib" "company" "company-tabnine" "dash" "s" "unicode-escape" "names" "company-reftex" "company-bibtex" "parsebib" "yatex" "org-doing" "ox-latex-subfigure")

t
