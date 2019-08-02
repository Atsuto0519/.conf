(function() {
  module.exports = {
    Context: {
      "atom-workspace": {
        "application:inspect": "要素の検証"
      },
      "atom-text-editor": {
        "color-picker:open": "カラーピッカー",
        "minimap:toggle": "ミニマップ切替"
      },
      "atom-text-editor, .overlayer": {
        "core:undo": "取り消す",
        "core:redo": "やり直す",
        "core:cut": "カット",
        "core:copy": "コピー",
        "core:paste": "ペースト",
        "core:delete": "削除",
        "core:select-all": "すべて選択",
        "pane:split-up-and-copy-active-item": "ペイン分割･複製 ↑",
        "pane:split-down-and-copy-active-item": "ペイン分割･複製 ↓",
        "pane:split-left-and-copy-active-item": "ペイン分割･複製 ←",
        "pane:split-right-and-copy-active-item": "ペイン分割･複製 →",
        "pane:close": "ペインを閉じる"
      },
      "atom-pane": {
        "pane:split-up-and-copy-active-item": "ペイン分割 ↑",
        "pane:split-down-and-copy-active-item": "ペイン分割 ↓",
        "pane:split-left-and-copy-active-item": "ペイン分割 ←",
        "pane:split-right-and-copy-active-item": "ペイン分割 →",
        "pane:close": "ペインを閉じる"
      },
      "atom-text-editor:not([mini])": {
        "encoding-selector:show": "エンコーディング選択",
        "spell-check:correct-misspelling": "スペル修正",
        "symbols-view:go-to-declaration": "宣言に移動"
      },
      ".tree-view li.directory": {
        "project-find:show-in-current-directory": "ディレクトリ内を検索"
      },
      ".path-details.list-item": {
        "find-and-replace:copy-path": "Copy Path"
      },
      ".overlayer": {
        "autocomplete:toggle": "オートコンプリート",
        "grammar-selector:show": "文法を選択"
      },
      ".image-view": {
        "image-view:reload": "画像をリロード"
      },
      ".markdown-preview": {
        "core:copy": "HTMLをコピー",
        "core:save-as": "HTMLを保存..."
      },
      ".tree-view .file .name[data-name$=\\.markdown]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tree-view .file .name[data-name$=\\.md]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tree-view .file .name[data-name$=\\.mdown]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tree-view .file .name[data-name$=\\.mkd]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tree-view .file .name[data-name$=\\.mkdown]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tree-view .file .name[data-name$=\\.ron]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tree-view .file .name[data-name$=\\.txt]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tab": {
        "tabs:close-tab": "タブを閉じる",
        "tabs:close-other-tabs": "他のタブをすべて閉じる",
        "tabs:close-tabs-to-right": "右側のタブを閉じる",
        "tabs:close-tabs-to-left": "左側のタブを閉じる",
        "tabs:close-saved-tabs": "保存したタブを閉じる",
        "tabs:close-all-tabs": "タブをすべて閉じる",
        "tabs:split-up": "ペイン分割 ↑",
        "tabs:split-down": "ペイン分割 ↓",
        "tabs:split-left": "ペイン分割 ←",
        "tabs:split-right": "ペイン分割 →"
      },
      ".tab.texteditor": {
        "tabs:open-in-new-window": "新規ウインドウで開く"
      },
      ".tab.pending-tab": {
        "tabs:keep-pending-tab": "プレビュー状態を解除"
      },
      ".tab-bar": {
        "pane:reopen-closed-item": "閉じたタブを開く"
      },
      ".tree-view .full-menu": {
        "tree-view:add-file": "新規ファイル",
        "tree-view:add-folder": "新規フォルダ",
        "tree-view:move": "移動・名前を変更...",
        "tree-view:duplicate": "複製",
        "tree-view:remove": "削除",
        "tree-view:copy": "コピー",
        "tree-view:cut": "カット",
        "tree-view:paste": "ペースト",
        "application:add-project-folder": "プロジェクトフォルダを追加...",
        "tree-view:copy-full-path": "フルパスをコピー",
        "tree-view:copy-project-path": "プロジェクトパスをコピー",
        "tree-view:open-in-new-window": "新規ウインドウで開く"
      },
      '.tree-view .full-menu [is="tree-view-file"]': {
        "tree-view:open-selected-entry-up": "ペイン分割 ↑",
        "tree-view:open-selected-entry-down": "ペイン分割 ↓",
        "tree-view:open-selected-entry-left": "ペイン分割 ←",
        "tree-view:open-selected-entry-right": "ペイン分割 →"
      },
      ".tree-view .full-menu .project-root > .header": {
        "tree-view:add-file": "新規ファイル",
        "tree-view:add-folder": "新規フォルダ",
        "tree-view:move": "移動・名前を変更...",
        "tree-view:duplicate": "複製",
        "tree-view:remove": "削除",
        "tree-view:copy": "コピー",
        "tree-view:cut": "カット",
        "tree-view:paste": "ペースト",
        "application:add-project-folder": "プロジェクトフォルダを追加...",
        "tree-view:remove-project-folder": "プロジェクトフォルダを除去",
        "tree-view:copy-full-path": "フルパスをコピー",
        "tree-view:copy-project-path": "プロジェクトパスをコピー",
        "tree-view:open-in-new-window": "新規ウインドウで開く"
      },
      ".platform-darwin .tree-view .full-menu": {
        "tree-view:show-in-file-manager": "Finder で表示"
      },
      ".platform-win32 .tree-view .full-menu": {
        "tree-view:show-in-file-manager": "エクスプローラで表示"
      },
      ".platform-linux .tree-view .full-menu": {
        "tree-view:show-in-file-manager": "ファイルマネージャで表示"
      },
      ".tree-view.multi-select": {
        "tree-view:remove": "削除",
        "tree-view:copy": "コピー",
        "tree-view:cut": "カット",
        "tree-view:paste": "ペースト"
      },
      "atom-pane[data-active-item-path] .item-views": {
        "tree-view:reveal-active-file": "ツリービューに表示"
      },
      "atom-pane[data-active-item-path] .tab.active": {
        "tree-view:rename": "移動・名前を変更...",
        "tree-view:reveal-active-file": "ツリービューに表示"
      },
      ".platform-darwin atom-pane[data-active-item-path] .tab.active": {
        "tree-view:show-current-file-in-file-manager": "Finder で表示"
      },
      ".platform-win32 atom-pane[data-active-item-path] .tab.active": {
        "tree-view:show-current-file-in-file-manager": "エクスプローラで表示"
      },
      ".platform-linux atom-pane[data-active-item-path] .tab.active": {
        "tree-view:show-current-file-in-file-manager": "ファイルマネージャで表示"
      },
      ".platform-darwin atom-text-editor:not([mini])": {
        "tree-view:show-current-file-in-file-manager": "Finder で表示"
      },
      ".platform-win32 atom-text-editor:not([mini])": {
        "tree-view:show-current-file-in-file-manager": "エクスプローラで表示"
      },
      ".platform-linux atom-text-editor:not([mini])": {
        "tree-view:show-current-file-in-file-manager": "ファイルマネージャで表示"
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9qYXBhbmVzZS1tZW51L2RlZi9jb250ZXh0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0lBQ2pCLE9BQUEsRUFDRTtNQUFBLGdCQUFBLEVBQ0U7UUFBQSxxQkFBQSxFQUF1QixPQUF2QjtPQURGO01BRUEsa0JBQUEsRUFDRTtRQUFBLG1CQUFBLEVBQXFCLFNBQXJCO1FBQ0EsZ0JBQUEsRUFBa0IsU0FEbEI7T0FIRjtNQUtBLDhCQUFBLEVBQ0U7UUFBQSxXQUFBLEVBQWEsTUFBYjtRQUNBLFdBQUEsRUFBYSxNQURiO1FBRUEsVUFBQSxFQUFZLEtBRlo7UUFHQSxXQUFBLEVBQWEsS0FIYjtRQUlBLFlBQUEsRUFBYyxNQUpkO1FBS0EsYUFBQSxFQUFlLElBTGY7UUFNQSxpQkFBQSxFQUFtQixPQU5uQjtRQU9BLG9DQUFBLEVBQXNDLFlBUHRDO1FBUUEsc0NBQUEsRUFBd0MsWUFSeEM7UUFTQSxzQ0FBQSxFQUF3QyxZQVR4QztRQVVBLHVDQUFBLEVBQXlDLFlBVnpDO1FBV0EsWUFBQSxFQUFjLFNBWGQ7T0FORjtNQWtCQSxXQUFBLEVBQ0U7UUFBQSxvQ0FBQSxFQUFzQyxTQUF0QztRQUNBLHNDQUFBLEVBQXdDLFNBRHhDO1FBRUEsc0NBQUEsRUFBd0MsU0FGeEM7UUFHQSx1Q0FBQSxFQUF5QyxTQUh6QztRQUlBLFlBQUEsRUFBYyxTQUpkO09BbkJGO01Bd0JBLDhCQUFBLEVBQ0U7UUFBQSx3QkFBQSxFQUEwQixZQUExQjtRQUNBLGlDQUFBLEVBQW1DLE9BRG5DO1FBRUEsZ0NBQUEsRUFBa0MsT0FGbEM7T0F6QkY7TUE0QkEseUJBQUEsRUFDRTtRQUFBLHdDQUFBLEVBQTBDLFlBQTFDO09BN0JGO01BOEJBLHlCQUFBLEVBQ0U7UUFBQSw0QkFBQSxFQUE4QixXQUE5QjtPQS9CRjtNQWdDQSxZQUFB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QUEsRUFBa0IsS0FEbEI7UUFFQSxlQUFBLEVBQWlCLEtBRmpCO1FBR0EsaUJBQUEsRUFBbUIsTUFIbkI7T0E5R0Y7TUFrSEEsOENBQUEsRUFDRTtRQUFBLDhCQUFBLEVBQWdDLFdBQWhDO09BbkhGO01Bb0hBLDhDQUFBLEVBQ0U7UUFBQSxrQkFBQSxFQUFvQixhQUFwQjtRQUNBLDhCQUFBLEVBQWdDLFdBRGhDO09BckhGO01BdUhBLCtEQUFBLEVBQ0U7UUFBQSw2Q0FBQSxFQUErQyxZQUEvQztPQXhIRjtNQXlIQSw4REFBQSxFQUNFO1FBQUEsNkNBQUEsRUFBK0MsWUFBL0M7T0ExSEY7TUEySEEsOERBQUEsRUFDRTtRQUFBLDZDQUFBLEVBQStDLGNBQS9DO09BNUhGO01BNkhBLCtDQUFBLEVBQ0U7UUFBQSw2Q0FBQSxFQUErQyxZQUEvQztPQTlIRjtNQStIQSw4Q0FBQSxFQUNFO1FBQUEsNkNBQUEsRUFBK0MsWUFBL0M7T0FoSUY7TUFpSUEsOENBQUEsRUFDRTtRQUFBLDZDQUFBLEVBQStDLGNBQS9DO09BbElGO0tBRmU7O0FBQWpCIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG5Db250ZXh0OlxuICBcImF0b20td29ya3NwYWNlXCI6XG4gICAgXCJhcHBsaWNhdGlvbjppbnNwZWN0XCI6IFwi6KaB57Sg44Gu5qSc6Ki8XCJcbiAgXCJhdG9tLXRleHQtZWRpdG9yXCI6XG4gICAgXCJjb2xvci1waWNrZXI6b3BlblwiOiBcIuOCq+ODqeODvOODlOODg+OCq+ODvFwiXG4gICAgXCJtaW5pbWFwOnRvZ2dsZVwiOiBcIuODn+ODi+ODnuODg+ODl+WIh+abv1wiXG4gIFwiYXRvbS10ZXh0LWVkaXRvciwgLm92ZXJsYXllclwiOlxuICAgIFwiY29yZTp1bmRvXCI6IFwi5Y+W44KK5raI44GZXCJcbiAgICBcImNvcmU6cmVkb1wiOiBcIuOChOOCiuebtOOBmVwiXG4gICAgXCJjb3JlOmN1dFwiOiBcIuOCq+ODg+ODiFwiXG4gICAgXCJjb3JlOmNvcHlcIjogXCLjgrPjg5Tjg7xcIlxuICAgIFwiY29yZTpwYXN0ZVwiOiBcIuODmuODvOOCueODiFwiXG4gICAgXCJjb3JlOmRlbGV0ZVwiOiBcIuWJiumZpFwiXG4gICAgXCJjb3JlOnNlbGVjdC1hbGxcIjogXCLjgZnjgbnjgabpgbjmip5cIlxuICAgIFwicGFuZTpzcGxpdC11cC1hbmQtY29weS1hY3RpdmUtaXRlbVwiOiBcIuODmuOCpOODs+WIhuWJsu+9peikh+ijvSDihpFcIlxuICAgIFwicGFuZTpzcGxpdC1kb3duLWFuZC1jb3B5LWFjdGl2ZS1pdGVtXCI6IFwi44Oa44Kk44Oz5YiG5Ymy772l6KSH6KO9IOKGk1wiXG4gICAgXCJwYW5lOnNwbGl0LWxlZnQtYW5kLWNvcHktYWN0aXZlLWl0ZW1cIjogXCLjg5rjgqTjg7PliIblibLvvaXopIfoo70g4oaQXCJcbiAgICBcInBhbmU6c3BsaXQtcmlnaHQtYW5kLWNvcHktYWN0aXZlLWl0ZW1cIjogXCLjg5rjgqTjg7PliIblibLvvaXopIfoo70g4oaSXCJcbiAgICBcInBhbmU6Y2xvc2VcIjogXCLjg5rjgqTjg7PjgpLplonjgZjjgotcIlxuICBcImF0b20tcGFuZVwiOlxuICAgIFwicGFuZTpzcGxpdC11cC1hbmQtY29weS1hY3RpdmUtaXRlbVwiOiBcIuODmuOCpOODs+WIhuWJsiDihpFcIlxuICAgIFwicGFuZTpzcGxpdC1kb3duLWFuZC1jb3B5LWFjdGl2ZS1pdGVtXCI6IFwi44Oa44Kk44Oz5YiG5YmyIOKGk1wiXG4gICAgXCJwYW5lOnNwbGl0LWxlZnQtYW5kLWNvcHktYWN0aXZlLWl0ZW1cIjogXCLjg5rjgqTjg7PliIblibIg4oaQXCJcbiAgICBcInBhbmU6c3BsaXQtcmlnaHQtYW5kLWNvcHktYWN0aXZlLWl0ZW1cIjogXCLjg5rjgqTjg7PliIblibIg4oaSXCJcbiAgICBcInBhbmU6Y2xvc2VcIjogXCLjg5rjgqTjg7PjgpLplonjgZjjgotcIlxuICBcImF0b20tdGV4dC1lZGl0b3I6bm90KFttaW5pXSlcIjpcbiAgICBcImVuY29kaW5nLXNlbGVjdG9yOnNob3dcIjogXCLjgqjjg7PjgrPjg7zjg4fjgqPjg7PjgrDpgbjmip5cIlxuICAgIFwic3BlbGwtY2hlY2s6Y29ycmVjdC1taXNzcGVsbGluZ1wiOiBcIuOCueODmuODq+S/ruato1wiXG4gICAgXCJzeW1ib2xzLXZpZXc6Z28tdG8tZGVjbGFyYXRpb25cIjogXCLlrqPoqIDjgavnp7vli5VcIlxuICBcIi50cmVlLXZpZXcgbGkuZGlyZWN0b3J5XCI6XG4gICAgXCJwcm9qZWN0LWZpbmQ6c2hvdy1pbi1jdXJyZW50LWRpcmVjdG9yeVwiOiBcIuODh+OCo+ODrOOCr+ODiOODquWGheOCkuaknOe0olwiXG4gIFwiLnBhdGgtZGV0YWlscy5saXN0LWl0ZW1cIjpcbiAgICBcImZpbmQtYW5kLXJlcGxhY2U6Y29weS1wYXRoXCI6IFwiQ29weSBQYXRoXCJcbiAgXCIub3ZlcmxheWVyXCI6XG4gICAgXCJhdXRvY29tcGxldGU6dG9nZ2xlXCI6IFwi44Kq44O844OI44Kz44Oz44OX44Oq44O844OIXCJcbiAgICBcImdyYW1tYXItc2VsZWN0b3I6c2hvd1wiOiBcIuaWh+azleOCkumBuOaKnlwiXG4gIFwiLmltYWdlLXZpZXdcIjpcbiAgICBcImltYWdlLXZpZXc6cmVsb2FkXCI6IFwi55S75YOP44KS44Oq44Ot44O844OJXCJcbiAgXCIubWFya2Rvd24tcHJldmlld1wiOlxuICAgIFwiY29yZTpjb3B5XCI6IFwiSFRNTOOCkuOCs+ODlOODvFwiXG4gICAgXCJjb3JlOnNhdmUtYXNcIjogXCJIVE1M44KS5L+d5a2YLi4uXCJcbiAgXCIudHJlZS12aWV3IC5maWxlIC5uYW1lW2RhdGEtbmFtZSQ9XFxcXC5tYXJrZG93bl1cIjpcbiAgICBcIm1hcmtkb3duLXByZXZpZXc6cHJldmlldy1maWxlXCI6IFwiTWFya2Rvd27jg5fjg6zjg5Pjg6Xjg7xcIlxuICBcIi50cmVlLXZpZXcgLmZpbGUgLm5hbWVbZGF0YS1uYW1lJD1cXFxcLm1kXVwiOlxuICAgIFwibWFya2Rvd24tcHJldmlldzpwcmV2aWV3LWZpbGVcIjogXCJNYXJrZG93buODl+ODrOODk+ODpeODvFwiXG4gIFwiLnRyZWUtdmlldyAuZmlsZSAubmFtZVtkYXRhLW5hbWUkPVxcXFwubWRvd25dXCI6XG4gICAgXCJtYXJrZG93bi1wcmV2aWV3OnByZXZpZXctZmlsZVwiOiBcIk1hcmtkb3du44OX44Os44OT44Ol44O8XCJcbiAgXCIudHJlZS12aWV3IC5maWxlIC5uYW1lW2RhdGEtbmFtZSQ9XFxcXC5ta2RdXCI6XG4gICAgXCJtYXJrZG93bi1wcmV2aWV3OnByZXZpZXctZmlsZVwiOiBcIk1hcmtkb3du44OX44Os44OT44Ol44O8XCJcbiAgXCIudHJlZS12aWV3IC5maWxlIC5uYW1lW2RhdGEtbmFtZSQ9XFxcXC5ta2Rvd25dXCI6XG4gICAgXCJtYXJrZG93bi1wcmV2aWV3OnByZXZpZXctZmlsZVwiOiBcIk1hcmtkb3du44OX44Os44OT44Ol44O8XCJcbiAgXCIudHJlZS12aWV3IC5maWxlIC5uYW1lW2RhdGEtbmFtZSQ9XFxcXC5yb25dXCI6XG4gICAgXCJtYXJrZG93bi1wcmV2aWV3OnByZXZpZXctZmlsZVwiOiBcIk1hcmtkb3du44OX44Os44OT44Ol44O8XCJcbiAgXCIudHJlZS12aWV3IC5maWxlIC5uYW1lW2RhdGEtbmFtZSQ9XFxcXC50eHRdXCI6XG4gICAgXCJtYXJrZG93bi1wcmV2aWV3OnByZXZpZXctZmlsZVwiOiBcIk1hcmtkb3du44OX44Os44OT44Ol44O8XCJcbiAgXCIudGFiXCI6XG4gICAgXCJ0YWJzOmNsb3NlLXRhYlwiOiBcIuOCv+ODluOCkumWieOBmOOCi1wiXG4gICAgXCJ0YWJzOmNsb3NlLW90aGVyLXRhYnNcIjogXCLku5bjga7jgr/jg5bjgpLjgZnjgbnjgabplonjgZjjgotcIlxuICAgIFwidGFiczpjbG9zZS10YWJzLXRvLXJpZ2h0XCI6IFwi5Y+z5YG044Gu44K/44OW44KS6ZaJ44GY44KLXCJcbiAgICBcInRhYnM6Y2xvc2UtdGFicy10by1sZWZ0XCI6IFwi5bem5YG044Gu44K/44OW44KS6ZaJ44GY44KLXCJcbiAgICBcInRhYnM6Y2xvc2Utc2F2ZWQtdGFic1wiOiBcIuS/neWtmOOBl+OBn+OCv+ODluOCkumWieOBmOOCi1wiXG4gICAgXCJ0YWJzOmNsb3NlLWFsbC10YWJzXCI6IFwi44K/44OW44KS44GZ44G544Gm6ZaJ44GY44KLXCJcbiAgICBcInRhYnM6c3BsaXQtdXBcIjogXCLjg5rjgqTjg7PliIblibIg4oaRXCJcbiAgICBcInRhYnM6c3BsaXQtZG93blwiOiBcIuODmuOCpOODs+WIhuWJsiDihpNcIlxuICAgIFwidGFiczpzcGxpdC1sZWZ0XCI6IFwi44Oa44Kk44Oz5YiG5YmyIOKGkFwiXG4gICAgXCJ0YWJzOnNwbGl0LXJpZ2h0XCI6IFwi44Oa44Kk44Oz5YiG5YmyIOKGklwiXG4gIFwiLnRhYi50ZXh0ZWRpdG9yXCI6XG4gICAgXCJ0YWJzOm9wZW4taW4tbmV3LXdpbmRvd1wiOiBcIuaWsOimj+OCpuOCpOODs+ODieOCpuOBp+mWi+OBj1wiXG4gIFwiLnRhYi5wZW5kaW5nLXRhYlwiOlxuICAgIFwidGFiczprZWVwLXBlbmRpbmctdGFiXCI6IFwi44OX44Os44OT44Ol44O854q25oWL44KS6Kej6ZmkXCJcbiAgXCIudGFiLWJhclwiOlxuICAgIFwicGFuZTpyZW9wZW4tY2xvc2VkLWl0ZW1cIjogXCLplonjgZjjgZ/jgr/jg5bjgpLplovjgY9cIlxuICBcIi50cmVlLXZpZXcgLmZ1bGwtbWVudVwiOlxuICAgIFwidHJlZS12aWV3OmFkZC1maWxlXCI6IFwi5paw6KaP44OV44Kh44Kk44OrXCJcbiAgICBcInRyZWUtdmlldzphZGQtZm9sZGVyXCI6IFwi5paw6KaP44OV44Kp44Or44OAXCJcbiAgICBcInRyZWUtdmlldzptb3ZlXCI6IFwi56e75YuV44O75ZCN5YmN44KS5aSJ5pu0Li4uXCJcbiAgICBcInRyZWUtdmlldzpkdXBsaWNhdGVcIjogXCLopIfoo71cIlxuICAgIFwidHJlZS12aWV3OnJlbW92ZVwiOiBcIuWJiumZpFwiXG4gICAgXCJ0cmVlLXZpZXc6Y29weVwiOiBcIuOCs+ODlOODvFwiXG4gICAgXCJ0cmVlLXZpZXc6Y3V0XCI6IFwi44Kr44OD44OIXCJcbiAgICBcInRyZWUtdmlldzpwYXN0ZVwiOiBcIuODmuODvOOCueODiFwiXG4gICAgXCJhcHBsaWNhdGlvbjphZGQtcHJvamVjdC1mb2xkZXJcIjogXCLjg5fjg63jgrjjgqfjgq/jg4jjg5Xjgqnjg6vjg4DjgpLov73liqAuLi5cIlxuICAgIFwidHJlZS12aWV3OmNvcHktZnVsbC1wYXRoXCI6IFwi44OV44Or44OR44K544KS44Kz44OU44O8XCJcbiAgICBcInRyZWUtdmlldzpjb3B5LXByb2plY3QtcGF0aFwiOiBcIuODl+ODreOCuOOCp+OCr+ODiOODkeOCueOCkuOCs+ODlOODvFwiXG4gICAgXCJ0cmVlLXZpZXc6b3Blbi1pbi1uZXctd2luZG93XCI6IFwi5paw6KaP44Km44Kk44Oz44OJ44Km44Gn6ZaL44GPXCJcbiAgJy50cmVlLXZpZXcgLmZ1bGwtbWVudSBbaXM9XCJ0cmVlLXZpZXctZmlsZVwiXSc6XG4gICAgXCJ0cmVlLXZpZXc6b3Blbi1zZWxlY3RlZC1lbnRyeS11cFwiOiBcIuODmuOCpOODs+WIhuWJsiDihpFcIlxuICAgIFwidHJlZS12aWV3Om9wZW4tc2VsZWN0ZWQtZW50cnktZG93blwiOiBcIuODmuOCpOODs+WIhuWJsiDihpNcIlxuICAgIFwidHJlZS12aWV3Om9wZW4tc2VsZWN0ZWQtZW50cnktbGVmdFwiOiBcIuODmuOCpOODs+WIhuWJsiDihpBcIlxuICAgIFwidHJlZS12aWV3Om9wZW4tc2VsZWN0ZWQtZW50cnktcmlnaHRcIjogXCLjg5rjgqTjg7PliIblibIg4oaSXCJcbiAgXCIudHJlZS12aWV3IC5mdWxsLW1lbnUgLnByb2plY3Qtcm9vdCA+IC5oZWFkZXJcIjpcbiAgICBcInRyZWUtdmlldzphZGQtZmlsZVwiOiBcIuaWsOimj+ODleOCoeOCpOODq1wiXG4gICAgXCJ0cmVlLXZpZXc6YWRkLWZvbGRlclwiOiBcIuaWsOimj+ODleOCqeODq+ODgFwiXG4gICAgXCJ0cmVlLXZpZXc6bW92ZVwiOiBcIuenu+WLleODu+WQjeWJjeOCkuWkieabtC4uLlwiXG4gICAgXCJ0cmVlLXZpZXc6ZHVwbGljYXRlXCI6IFwi6KSH6KO9XCJcbiAgICBcInRyZWUtdmlldzpyZW1vdmVcIjogXCLliYrpmaRcIlxuICAgIFwidHJlZS12aWV3OmNvcHlcIjogXCLjgrPjg5Tjg7xcIlxuICAgIFwidHJlZS12aWV3OmN1dFwiOiBcIuOCq+ODg+ODiFwiXG4gICAgXCJ0cmVlLXZpZXc6cGFzdGVcIjogXCLjg5rjg7zjgrnjg4hcIlxuICAgIFwiYXBwbGljYXRpb246YWRkLXByb2plY3QtZm9sZGVyXCI6IFwi44OX44Ot44K444Kn44Kv44OI44OV44Kp44Or44OA44KS6L+95YqgLi4uXCJcbiAgICBcInRyZWUtdmlldzpyZW1vdmUtcHJvamVjdC1mb2xkZXJcIjogXCLjg5fjg63jgrjjgqfjgq/jg4jjg5Xjgqnjg6vjg4DjgpLpmaTljrtcIlxuICAgIFwidHJlZS12aWV3OmNvcHktZnVsbC1wYXRoXCI6IFwi44OV44Or44OR44K544KS44Kz44OU44O8XCJcbiAgICBcInRyZWUtdmlldzpjb3B5LXByb2plY3QtcGF0aFwiOiBcIuODl+ODreOCuOOCp+OCr+ODiOODkeOCueOCkuOCs+ODlOODvFwiXG4gICAgXCJ0cmVlLXZpZXc6b3Blbi1pbi1uZXctd2luZG93XCI6IFwi5paw6KaP44Km44Kk44Oz44OJ44Km44Gn6ZaL44GPXCJcbiAgXCIucGxhdGZvcm0tZGFyd2luIC50cmVlLXZpZXcgLmZ1bGwtbWVudVwiOlxuICAgIFwidHJlZS12aWV3OnNob3ctaW4tZmlsZS1tYW5hZ2VyXCI6IFwiRmluZGVyIOOBp+ihqOekulwiXG4gIFwiLnBsYXRmb3JtLXdpbjMyIC50cmVlLXZpZXcgLmZ1bGwtbWVudVwiOlxuICAgIFwidHJlZS12aWV3OnNob3ctaW4tZmlsZS1tYW5hZ2VyXCI6IFwi44Ko44Kv44K544OX44Ot44O844Op44Gn6KGo56S6XCJcbiAgXCIucGxhdGZvcm0tbGludXggLnRyZWUtdmlldyAuZnVsbC1tZW51XCI6XG4gICAgXCJ0cmVlLXZpZXc6c2hvdy1pbi1maWxlLW1hbmFnZXJcIjogXCLjg5XjgqHjgqTjg6vjg57jg43jg7zjgrjjg6PjgafooajnpLpcIlxuICBcIi50cmVlLXZpZXcubXVsdGktc2VsZWN0XCI6XG4gICAgXCJ0cmVlLXZpZXc6cmVtb3ZlXCI6IFwi5YmK6ZmkXCJcbiAgICBcInRyZWUtdmlldzpjb3B5XCI6IFwi44Kz44OU44O8XCJcbiAgICBcInRyZWUtdmlldzpjdXRcIjogXCLjgqvjg4Pjg4hcIlxuICAgIFwidHJlZS12aWV3OnBhc3RlXCI6IFwi44Oa44O844K544OIXCJcbiAgXCJhdG9tLXBhbmVbZGF0YS1hY3RpdmUtaXRlbS1wYXRoXSAuaXRlbS12aWV3c1wiOlxuICAgIFwidHJlZS12aWV3OnJldmVhbC1hY3RpdmUtZmlsZVwiOiBcIuODhOODquODvOODk+ODpeODvOOBq+ihqOekulwiXG4gIFwiYXRvbS1wYW5lW2RhdGEtYWN0aXZlLWl0ZW0tcGF0aF0gLnRhYi5hY3RpdmVcIjpcbiAgICBcInRyZWUtdmlldzpyZW5hbWVcIjogXCLnp7vli5Xjg7vlkI3liY3jgpLlpInmm7QuLi5cIlxuICAgIFwidHJlZS12aWV3OnJldmVhbC1hY3RpdmUtZmlsZVwiOiBcIuODhOODquODvOODk+ODpeODvOOBq+ihqOekulwiXG4gIFwiLnBsYXRmb3JtLWRhcndpbiBhdG9tLXBhbmVbZGF0YS1hY3RpdmUtaXRlbS1wYXRoXSAudGFiLmFjdGl2ZVwiOlxuICAgIFwidHJlZS12aWV3OnNob3ctY3VycmVudC1maWxlLWluLWZpbGUtbWFuYWdlclwiOiBcIkZpbmRlciDjgafooajnpLpcIlxuICBcIi5wbGF0Zm9ybS13aW4zMiBhdG9tLXBhbmVbZGF0YS1hY3RpdmUtaXRlbS1wYXRoXSAudGFiLmFjdGl2ZVwiOlxuICAgIFwidHJlZS12aWV3OnNob3ctY3VycmVudC1maWxlLWluLWZpbGUtbWFuYWdlclwiOiBcIuOCqOOCr+OCueODl+ODreODvOODqeOBp+ihqOekulwiXG4gIFwiLnBsYXRmb3JtLWxpbnV4IGF0b20tcGFuZVtkYXRhLWFjdGl2ZS1pdGVtLXBhdGhdIC50YWIuYWN0aXZlXCI6XG4gICAgXCJ0cmVlLXZpZXc6c2hvdy1jdXJyZW50LWZpbGUtaW4tZmlsZS1tYW5hZ2VyXCI6IFwi44OV44Kh44Kk44Or44Oe44ON44O844K444Oj44Gn6KGo56S6XCJcbiAgXCIucGxhdGZvcm0tZGFyd2luIGF0b20tdGV4dC1lZGl0b3I6bm90KFttaW5pXSlcIjpcbiAgICBcInRyZWUtdmlldzpzaG93LWN1cnJlbnQtZmlsZS1pbi1maWxlLW1hbmFnZXJcIjogXCJGaW5kZXIg44Gn6KGo56S6XCJcbiAgXCIucGxhdGZvcm0td2luMzIgYXRvbS10ZXh0LWVkaXRvcjpub3QoW21pbmldKVwiOlxuICAgIFwidHJlZS12aWV3OnNob3ctY3VycmVudC1maWxlLWluLWZpbGUtbWFuYWdlclwiOiBcIuOCqOOCr+OCueODl+ODreODvOODqeOBp+ihqOekulwiXG4gIFwiLnBsYXRmb3JtLWxpbnV4IGF0b20tdGV4dC1lZGl0b3I6bm90KFttaW5pXSlcIjpcbiAgICBcInRyZWUtdmlldzpzaG93LWN1cnJlbnQtZmlsZS1pbi1maWxlLW1hbmFnZXJcIjogXCLjg5XjgqHjgqTjg6vjg57jg43jg7zjgrjjg6PjgafooajnpLpcIlxufVxuIl19
