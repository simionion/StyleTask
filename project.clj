(defproject circle "1.0"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.773"
                  :exclusions [com.google.javascript/closure-compiler-unshaded
                               org.clojure/google-closure-library
                               org.clojure/google-closure-library-third-party]]
                 [reagent "1.1.0"]
                 [re-frame "1.2.0"]
                 [day8.re-frame/undo "0.3.3"]
                 [day8.re-frame/re-frame-10x "1.2.2"]])
