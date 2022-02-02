(ns circle.views
  (:require
    [re-frame.core :as re-frame]
    [circle.subs :as subs]
    [circle.modal :refer [modal modal-show]]
    ))

(defn get-click-coordinates [e]
  (let [xy {:x (- e.clientX e.target.offsetLeft)
            :y (- e.clientY e.target.offsetTop)}]
    xy))

(defn build-circle [xy]
  (let [ci (assoc xy :d (rand-nth (range 10 30)))]
    (re-frame/dispatch [:add-circle ci])))

(defn add-circle [e]
  (build-circle (get-click-coordinates e)))

(defn undo-button []
  (let [undos? (re-frame/subscribe [:undos?])]
    (fn []
      [:input {:type     "button"
               :value    "Undo"
               :class    "btn"
               :disabled (not @undos?)
               :on-click #(re-frame/dispatch [:undo])}])))

(defn redo-button []
  (let [redos? (re-frame/subscribe [:redos?])]
    (fn []
      [:input {:type     "button"
               :value    "Redo"
               :class    "btn"
               :disabled (not @redos?)
               :on-click #(re-frame/dispatch [:redo])}])))

(defn main-panel []
  [:div
   [modal]
   [:div.circle-draw
    [:div.action-menu
     [undo-button]
     [redo-button]
     ]
    [:div.ci-container {:on-click add-circle}
     (for [circle @(re-frame/subscribe [:get-circles])]
       ^{:key circle} [:div.circle
                       {:style           {:left   (:x circle)
                                          :top    (:y circle)
                                          :height (* 2 (:d circle))
                                          :width  (* 2 (:d circle))}
                        :on-click        (fn [e] (.stopPropagation e) (re-frame/dispatch [:set-active-circle circle]))
                        :on-context-menu (fn [e] (.preventDefault e) (re-frame/dispatch [:set-active-circle circle]))
                        }])
     ]
    ]])
