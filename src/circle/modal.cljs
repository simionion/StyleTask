(ns circle.modal
  (:require
    [goog.string :as gstring]
    [re-frame.core :as re-frame]
    [reagent.core :as r]))


(def ^:private shown? (r/atom false))


(defn modal-show
  []
  (reset! shown? true))


(defn modal-hide
  []
  (reset! shown? false))


(defn modal
  []
  (let [circle @(re-frame/subscribe [:active-circle])]
    ^{:key circle}
    [:div.modal
     {:style {:display (when @shown? "block")}}
     [:div.modal-content
      [:span.close {:title "Close" :on-click modal-hide} "×"]
      [:p (gstring/format "Adjust diameter of circle at (%d, %d)" (:x circle) (:y circle))]
      [:input {:type         "range"
               :name         "diameter"
               :min          1
               :max          100
               :defaultValue (:d circle nil)
               :on-change    (fn [event]
                               (re-frame/dispatch [:active-circle-changed circle (-> event .-target .-value)]))}]]]))


