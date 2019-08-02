(function() {
  module.exports = {
    Settings: {
      menu: [
        {
          label: "Core",
          value: "コア設定"
        }, {
          label: "Editor",
          value: "エディタ設定"
        }, {
          label: "System",
          value: "システム設定"
        }, {
          label: "Keybindings",
          value: "キーバインド"
        }, {
          label: "Packages",
          value: "パッケージ"
        }, {
          label: "Themes",
          value: "テーマ"
        }, {
          label: "Updates",
          value: "アップデート"
        }, {
          label: "Install",
          value: "インストール"
        }
      ],
      sectionHeadings: [
        {
          label: "Core Settings",
          value: "コア設定"
        }, {
          label: "Editor Settings",
          value: "エディタ設定"
        }, {
          label: "System Settings",
          value: "システム設定"
        }, {
          label: "Keybindings",
          value: "キーバインド"
        }, {
          label: "Installed Packages",
          value: "インストール済みのパッケージ"
        }, {
          label: "Choose a Theme",
          value: "テーマの選択"
        }, {
          label: "Installed Themes",
          value: "インストール済みのテーマ"
        }, {
          label: "Available Updates",
          value: "利用可能なアップデート"
        }, {
          label: "Install Packages",
          value: "パッケージのインストール"
        }, {
          label: "Featured Packages",
          value: "おすすめのパッケージ"
        }, {
          label: "Install Themes",
          value: "テーマのインストール"
        }, {
          label: "Featured Themes",
          value: "おすすめのテーマ"
        }
      ],
      subSectionHeadings: [
        {
          label: "Invisible",
          value: "不可視文字"
        }, {
          label: "Community Packages",
          value: "コミュニティパッケージ"
        }, {
          label: "Core Packages",
          value: "コアパッケージ"
        }, {
          label: "Development Packages",
          value: "開発パッケージ"
        }, {
          label: "Git Packages",
          value: "Git パッケージ"
        }, {
          label: "Community Themes",
          value: "コミュニティテーマ"
        }, {
          label: "Core Themes",
          value: "コアテーマ"
        }, {
          label: "Development Themes",
          value: "開発テーマ"
        }, {
          label: "Git Themes",
          value: "Git テーマ"
        }
      ],
      settings: {
        notes: [
          {
            id: 'core-settings-note',
            html: 'テキスト編集のふるまいとは関係のないコアな部分の設定項目です。個々のパッケージにも固有の設定項目が用意されている場合があるので、 こちらの <a class="link packages-open">パッケージリスト</a> からパッケージカードをクリックして設定をご確認ください。'
          }, {
            id: 'editor-settings-note',
            html: 'テキスト編集のふるまいに関する設定項目です。言語の基準によってはこれらの設定が上書きされる場合があるため、 こちらの <a class="link packages-open">パッケージリスト</a> からパッケージカードをクリックして設定をご確認ください。'
          }
        ],
        controls: [
          {
            id: 'core.allowPendingPaneItems',
            title: "プレビュータブを使う",
            desc: "ツリービューなどでファイルを選択した時にタブをプレビュー状態で開きます。 プレビュー時はタブ名が斜体となり、別のファイル選択時にタブが使い回されます。 ダブルクリックまたは編集を開始することでプレビュー状態が解除されます。"
          }, {
            id: 'core.audioBeep',
            title: "ビープ音を鳴らす",
            desc: "処理が予期したとおりに実行されなかったり、結果が何も得られなかった場合にシステムのビープ音を鳴らします。"
          }, {
            id: 'core.automaticallyUpdate',
            title: "自動アップデート",
            desc: "新しいバージョンの Atom がリリースされていた場合に自動でアップデートします。"
          }, {
            id: 'core.closeDeletedFileTabs',
            title: "削除されたファイルのタブを閉じる",
            desc: "Atom の外で削除されたファイルのタブを自動的に閉じます。"
          }, {
            id: 'core.autoHideMenuBar',
            title: "メニューバーを自動的に隠す",
            desc: "メニューバーを自動的に隠して Alt キーで切り替えます。この設定は Windows と Linux でのみサポートされます。"
          }, {
            id: 'core.closeEmptyWindows',
            title: "空になったウインドウをタブと同様に閉じる",
            desc: "ウインドウ内にタブもペインもない状態でタブを閉じるコマンドを与えた場合、ウインドウを閉じます。"
          }, {
            id: 'core.destroyEmptyPanes',
            title: "空になったペインを自動的に閉じる",
            desc: "最後に開いていたタブを閉じた場合、ペインも閉じます。"
          }, {
            id: 'core.excludeVcsIgnoredPaths',
            title: "バージョン管理システムによって無視されたパスを除外する",
            desc: "現在のプロジェクトで使用中のバージョン管理システムによって無視されたファイルとディレクトリが、あいまい検索や検索、置換の中で無視されるようになります。 例えば Git を使用しているプロジェクトでは .gitignore ファイルで定義されたパスがそれにあたります。 個々のパッケージにもこの設定とは別にファイルやフォルダを無視する設定があるかもしれません。"
          }, {
            id: 'core.fileEncoding',
            title: "ファイルエンコーディング",
            desc: "ファイルを読み書きするためのデフォルトキャラクタセットを指定します。"
          }, {
            id: 'core.followSymlinks',
            title: "シンボリックリンクをたどる",
            desc: "あいまい検索でファイルを検索・開く時に使用されます。"
          }, {
            id: 'core.ignoredNames',
            title: "無視するファイル",
            desc: "無視する glob パターンを列挙します。マッチしたファイルとディレクトリは、あいまい検索やツリービューで表示されなくなります。 個々のパッケージにもこの設定とは別にファイルやフォルダを無視する設定があるかもしれません。"
          }, {
            id: 'core.openEmptyEditorOnStart',
            title: "起動時に新規エディタを開く",
            desc: "起動時に新規のエディタを自動的に開きます。"
          }, {
            id: 'core.projectHome',
            title: "プロジェクトホーム",
            desc: "プロジェクト群を配置するディレクトリを指定します。パッケージジェネレータで作成されたパッケージはデフォルトでここが格納先となります。"
          }, {
            id: 'core.reopenProjectMenuCount',
            title: "プロジェクト履歴の表示数",
            desc: "メニュー「プロジェクト履歴から開く」に表示するプロジェクトの数を指定します。"
          }, {
            id: 'core.restorePreviousWindowsOnStart',
            title: "起動時に前回のウインドウ表示状態を復元する",
            desc: "アイコンもしくは atom コマンドから起動したときに、最後に開いていた Atom のウインドウすべてを復元します。"
          }, {
            id: 'core.telemetryConsent',
            title: "Atom チームに遠隔測定結果を送信する",
            desc: "使用統計データと障害レポートを Atom チームに送信して機能向上に役立てることを許可します。",
            select: {
              limited: "匿名で限定された使用統計データと障害レポートの送信を許可する",
              no: "遠隔測定結果を送信しない",
              undecided: "まだ決まっていない（次回起動時に再確認）"
            }
          }, {
            id: 'core.useCustomTitleBar',
            title: "カスタムタイトルバーを使う"
          }, {
            id: 'core.useProxySettingsWhenCallingApm',
            title: "APM を呼ぶときにプロキシ設定を使う",
            desc: "APM (Atom Package Manager) の apm コマンドラインツールを呼ぶときに、検出したプロキシ設定を使います。"
          }, {
            id: 'core.warnOnLargeFileLimit',
            title: "重いファイルを開く時に警告するサイズ",
            desc: "指定したファイルサイズ（メガバイト）より大きなファイルを開く前に警告します。"
          }, {
            id: 'editor.atomicSoftTabs',
            title: "アトミック ソフトタブ",
            desc: "カーソル移動の時、ソフトタブインデントの空白をタブ幅でスキップします。"
          }, {
            id: 'editor.autoIndent',
            title: "自動インデント",
            desc: "新しい行を挿入（改行）した時、カーソル位置を自動的にインデントした位置に移動します。"
          }, {
            id: 'editor.autoIndentOnPaste',
            title: "ペースト時に自動インデント",
            desc: "ペーストしたテキストを直前の行のインデントを基準に自動的にインデントします。"
          }, {
            id: 'editor.backUpBeforeSaving',
            title: "保存前にバックアップを取る",
            desc: "ファイルの保存中に I/O エラーが発生した場合にファイルの内容が失われないよう、バックアップ用の一時コピーを作成します。"
          }, {
            id: 'editor.confirmCheckoutHeadRevision',
            title: "変更を破棄して HEAD リビジョンに戻す時に確認する",
            desc: "コマンド `Editor: Checkout Head Revision` を使用して HEAD リビジョンをチェックアウトし現在の変更内容を破棄する前に確認ダイアログを表示します。"
          }, {
            id: 'editor.fontFamily',
            title: "フォント",
            desc: "font-family"
          }, {
            id: 'editor.fontSize',
            title: "フォントサイズ",
            desc: "font-size (px)"
          }, {
            id: 'editor.invisibles.cr',
            title: "不可視文字 キャリッジ・リターン (Cr)",
            desc: "キャリッジ・リターン（Microsoftスタイルの行末文字）として描画する文字（「不可視文字を表示」を有効にしている場合）"
          }, {
            id: 'editor.invisibles.eol',
            title: "不可視文字 改行 (Eol)",
            desc: "改行 (\\n) として描画する文字（「不可視文字を表示」を有効にしている場合）"
          }, {
            id: 'editor.invisibles.space',
            title: "不可視文字 スペース",
            desc: "スペース（行頭以前と行末以降）として描画する文字（「不可視文字を表示」を有効にしている場合）"
          }, {
            id: 'editor.invisibles.tab',
            title: "不可視文字 タブ",
            desc: "ハードタブ（\\t）として描画する文字（「不可視文字を表示」を有効にしている場合）"
          }, {
            id: 'editor.lineHeight',
            title: "行の高さ",
            desc: "line-height (number)"
          }, {
            id: 'editor.nonWordCharacters',
            title: "単語の一部として扱わない文字",
            desc: "単語の境界を定めるための文字"
          }, {
            id: 'editor.preferredLineLength',
            title: "右端ガイドの位置",
            desc: "「右端ガイドの位置でソフトラップ」が有効な場合にテキストを折り返す位置を文字数で指定します。"
          }, {
            id: 'editor.scrollPastEnd',
            title: "最終行を超えてスクロール",
            desc: "エディタに最終行が表示された地点でスクロールを止めないようにします。"
          }, {
            id: 'editor.scrollSensitivity',
            title: "スクロール速度",
            desc: "マウスやトラックパッドでエディタをスクロールする時の速度"
          }, {
            id: 'editor.showCursorOnSelection',
            title: "選択範囲にカーソルを表示",
            desc: "選択範囲が存在する場合にカーソル（点滅するＩビーム）を表示します。"
          }, {
            id: 'editor.showIndentGuide',
            title: "インデントガイドを表示",
            desc: "エディタ内にインデントガイドを表示します。"
          }, {
            id: 'editor.showInvisibles',
            title: "不可視文字を表示",
            desc: "タブやスペース、改行などの見えない文字を記号として表示します。"
          }, {
            id: 'editor.showLineNumbers',
            title: "行番号を表示",
            desc: "エディタ内に行番号を表示します。"
          }, {
            id: 'editor.softTabs',
            title: "ソフトタブ",
            desc: "タブ文字の代わりにスペースを連ねて挿入します。"
          }, {
            id: 'editor.softWrap',
            title: "ソフトラップ",
            desc: "ウィンドウ幅を超えた時に折り返して表示します。「右端ガイドの位置でソフトラップ」が有効の場合は「右端ガイドの位置」の設定値で折り返されます。"
          }, {
            id: 'editor.softWrapAtPreferredLineLength',
            title: "右端ガイドの位置でソフトラップ",
            desc: "「右端ガイドの位置」の設定値で折り返します。この設定はソフトラップがグローバルまたは作業中の言語で有効な場合のみ適用されます。"
          }, {
            id: 'editor.softWrapHangingIndent',
            title: "ソフトラップ時のインデント幅",
            desc: "「ソフトラップ」が有効な場合、ラップされた行に対し指定した文字数だけ追加でインデントします。"
          }, {
            id: 'editor.tabLength',
            title: "タブ幅",
            desc: "タブを表す際に使用されるスペースの数"
          }, {
            id: 'editor.tabType',
            title: "タブタイプ",
            desc: 'タブキーを押した際に挿入する文字の形式を指定します。"soft" はソフトタブ（Space）、"hard" はハードタブ（Tab）が使用されます。 "auto" はエディタがバッファの内容を自動判別します。自動判別は最初に見つけた行（コメント行を除く）の先頭にあるスペースで行われます。 自動判別できなかった場合はソフトタブが設定されます。'
          }, {
            id: 'editor.undoGroupingInterval',
            title: "取り消し操作単位",
            desc: "ひとまとまりの操作と認識させて取り消し履歴に登録する間隔（ミリ秒）"
          }, {
            id: 'editor.zoomFontWhenCtrlScrolling',
            title: "Ctrl スクロールでフォントサイズを変える",
            desc: "コントロールキーを押しながらスクロールを上下することでエディタのフォントサイズを拡大/縮小します。"
          }, {
            id: 'system.windows.file-handler',
            title: "ファイルを取扱うアプリとして登録する",
            desc: "ファイルの関連付けを簡単にするために、Atom を「プログラムから開く...」の一覧に表示します。"
          }, {
            id: 'system.windows.shell-menu-files',
            title: "ファイルの右クリックメニューから開く",
            desc: "エクスプローラでのファイル右クリックメニューに \"Open with Atom\" を追加します。"
          }, {
            id: 'system.windows.shell-menu-folders',
            title: "フォルダの右クリックメニューから開く",
            desc: "エクスプローラでのフォルダ右クリックメニューに \"Open with Atom\" を追加します。"
          }
        ]
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9qYXBhbmVzZS1tZW51L2RlZi9zZXR0aW5ncy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxNQUFNLENBQUMsT0FBUCxHQUFpQjtJQUNqQixRQUFBLEVBQ0U7TUFBQSxJQUFBLEVBQU07UUFDSjtVQUNFLEtBQUEsRUFBTyxNQURUO1VBRUUsS0FBQSxFQUFPLE1BRlQ7U0FESSxFQUtKO1VBQ0UsS0FBQSxFQUFPLFFBRFQ7VUFFRSxLQUFBLEVBQU8sUUFGVDtTQUxJLEVBU0o7VUFDRSxLQUFBLEVBQU8sUUFEVDtVQUVFLEtBQUEsRUFBTyxRQUZUO1NBVEksRUFhSjtVQUNFLEtBQUEsRUFBTyxhQURUO1VBRUUsS0FBQSxFQUFPLFFBRlQ7U0FiSSxFQWlCSjtVQUNFLEtBQUEsRUFBTyxVQURUO1VBRUUsS0FBQSxFQUFPLE9BRlQ7U0FqQkksRUFxQko7VUFDRSxLQUFBLEVBQU8sUUFEVDtVQUVFLEtBQUEsRUFBTyxLQUZUO1NBckJJLEVBeUJKO1VBQ0UsS0FBQSxFQUFPLFNBRFQ7VUFFRSxLQUFBLEVBQU8sUUFGVDtTQXpCSSxFQTZCSjtVQUNFLEtBQUEsRUFBTyxTQURUO1VBRUUsS0FBQSxFQUFPLFFBRlQ7U0E3Qkk7T0FBTjtNQWtDQSxlQUFBLEVBQWlCO1FBQ2Y7VUFBQyxLQUFBLEVBQU8sZUFBUjtVQUF5QixLQUFBLEVBQU8sTUFBaEM7U0FEZSxFQUVmO1VBQUMsS0FBQSxFQUFPLGlCQUFSO1VBQTJCLEtBQUEsRUFBTyxRQUFsQztTQUZlLEVBR2Y7VUFBQyxLQUFBLEVBQU8saUJBQVI7VUFBMkIsS0FBQSxFQUFPLFFBQWxDO1NBSGUsRUFJZjtVQUFDLEtBQUEsRUFBTyxhQUFSO1VBQXVCLEtBQUEsRUFBTyxRQUE5QjtTQUplLEVBS2Y7VUFBQyxLQUFBLEVBQU8sb0JBQVI7VUFBOEIsS0FBQSxFQUFPLGdCQUFyQztTQUxlLEVBTWY7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QU0sbUNBSFI7V0E1T1EsRUFpUFI7WUFDRSxFQUFBLEVBQUksa0NBRE47WUFFRSxLQUFBLEVBQU8sd0JBRlQ7WUFHRSxJQUFBLEVBQU0sbURBSFI7V0FqUFEsRUFzUFI7WUFDRSxFQUFBLEVBQUksNkJBRE47WUFFRSxLQUFBLEVBQU8sb0JBRlQ7WUFHRSxJQUFBLEVBQU0sbURBSFI7V0F0UFEsRUEyUFI7WUFDRSxFQUFBLEVBQUksaUNBRE47WUFFRSxLQUFBLEVBQU8sb0JBRlQ7WUFHRSxJQUFBLEVBQU0sb0RBSFI7V0EzUFEsRUFnUVI7WUFDRSxFQUFBLEVBQUksbUNBRE47WUFFRSxLQUFBLEVBQU8sb0JBRlQ7WUFHRSxJQUFBLEVBQU0sb0RBSFI7V0FoUVE7U0FiRjtPQTNEVjtLQUZlOztBQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuU2V0dGluZ3M6XG4gIG1lbnU6IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJDb3JlXCJcbiAgICAgIHZhbHVlOiBcIuOCs+OCouioreWumlwiXG4gICAgfVxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkVkaXRvclwiXG4gICAgICB2YWx1ZTogXCLjgqjjg4fjgqPjgr/oqK3lrppcIlxuICAgIH1cbiAgICB7XG4gICAgICBsYWJlbDogXCJTeXN0ZW1cIlxuICAgICAgdmFsdWU6IFwi44K344K544OG44Og6Kit5a6aXCJcbiAgICB9XG4gICAge1xuICAgICAgbGFiZWw6IFwiS2V5YmluZGluZ3NcIlxuICAgICAgdmFsdWU6IFwi44Kt44O844OQ44Kk44Oz44OJXCJcbiAgICB9XG4gICAge1xuICAgICAgbGFiZWw6IFwiUGFja2FnZXNcIlxuICAgICAgdmFsdWU6IFwi44OR44OD44Kx44O844K4XCJcbiAgICB9XG4gICAge1xuICAgICAgbGFiZWw6IFwiVGhlbWVzXCJcbiAgICAgIHZhbHVlOiBcIuODhuODvOODnlwiXG4gICAgfVxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlVwZGF0ZXNcIlxuICAgICAgdmFsdWU6IFwi44Ki44OD44OX44OH44O844OIXCJcbiAgICB9XG4gICAge1xuICAgICAgbGFiZWw6IFwiSW5zdGFsbFwiXG4gICAgICB2YWx1ZTogXCLjgqTjg7Pjgrnjg4jjg7zjg6tcIlxuICAgIH1cbiAgXVxuICBzZWN0aW9uSGVhZGluZ3M6IFtcbiAgICB7bGFiZWw6IFwiQ29yZSBTZXR0aW5nc1wiLCB2YWx1ZTogXCLjgrPjgqLoqK3lrppcIn1cbiAgICB7bGFiZWw6IFwiRWRpdG9yIFNldHRpbmdzXCIsIHZhbHVlOiBcIuOCqOODh+OCo+OCv+ioreWumlwifVxuICAgIHtsYWJlbDogXCJTeXN0ZW0gU2V0dGluZ3NcIiwgdmFsdWU6IFwi44K344K544OG44Og6Kit5a6aXCJ9XG4gICAge2xhYmVsOiBcIktleWJpbmRpbmdzXCIsIHZhbHVlOiBcIuOCreODvOODkOOCpOODs+ODiVwifVxuICAgIHtsYWJlbDogXCJJbnN0YWxsZWQgUGFja2FnZXNcIiwgdmFsdWU6IFwi44Kk44Oz44K544OI44O844Or5riI44G/44Gu44OR44OD44Kx44O844K4XCJ9XG4gICAge2xhYmVsOiBcIkNob29zZSBhIFRoZW1lXCIsIHZhbHVlOiBcIuODhuODvOODnuOBrumBuOaKnlwifVxuICAgIHtsYWJlbDogXCJJbnN0YWxsZWQgVGhlbWVzXCIsIHZhbHVlOiBcIuOCpOODs+OCueODiOODvOODq+a4iOOBv+OBruODhuODvOODnlwifVxuICAgIHtsYWJlbDogXCJBdmFpbGFibGUgVXBkYXRlc1wiLCB2YWx1ZTogXCLliKnnlKjlj6/og73jgarjgqLjg4Pjg5fjg4fjg7zjg4hcIn1cbiAgICB7bGFiZWw6IFwiSW5zdGFsbCBQYWNrYWdlc1wiLCB2YWx1ZTogXCLjg5Hjg4PjgrHjg7zjgrjjga7jgqTjg7Pjgrnjg4jjg7zjg6tcIn1cbiAgICB7bGFiZWw6IFwiRmVhdHVyZWQgUGFja2FnZXNcIiwgdmFsdWU6IFwi44GK44GZ44GZ44KB44Gu44OR44OD44Kx44O844K4XCJ9XG4gICAge2xhYmVsOiBcIkluc3RhbGwgVGhlbWVzXCIsIHZhbHVlOiBcIuODhuODvOODnuOBruOCpOODs+OCueODiOODvOODq1wifVxuICAgIHtsYWJlbDogXCJGZWF0dXJlZCBUaGVtZXNcIiwgdmFsdWU6IFwi44GK44GZ44GZ44KB44Gu44OG44O844OeXCJ9XG4gIF1cbiAgc3ViU2VjdGlvbkhlYWRpbmdzOiBbXG4gICAge2xhYmVsOiBcIkludmlzaWJsZVwiLCB2YWx1ZTogXCLkuI3lj6/oppbmloflrZdcIn1cbiAgICB7bGFiZWw6IFwiQ29tbXVuaXR5IFBhY2thZ2VzXCIsIHZhbHVlOiBcIuOCs+ODn+ODpeODi+ODhuOCo+ODkeODg+OCseODvOOCuFwifVxuICAgIHtsYWJlbDogXCJDb3JlIFBhY2thZ2VzXCIsIHZhbHVlOiBcIuOCs+OCouODkeODg+OCseODvOOCuFwifVxuICAgIHtsYWJlbDogXCJEZXZlbG9wbWVudCBQYWNrYWdlc1wiLCB2YWx1ZTogXCLplovnmbrjg5Hjg4PjgrHjg7zjgrhcIn1cbiAgICB7bGFiZWw6IFwiR2l0IFBhY2thZ2VzXCIsIHZhbHVlOiBcIkdpdCDjg5Hjg4PjgrHjg7zjgrhcIn1cbiAgICB7bGFiZWw6IFwiQ29tbXVuaXR5IFRoZW1lc1wiLCB2YWx1ZTogXCLjgrPjg5/jg6Xjg4vjg4bjgqPjg4bjg7zjg55cIn1cbiAgICB7bGFiZWw6IFwiQ29yZSBUaGVtZXNcIiwgdmFsdWU6IFwi44Kz44Ki44OG44O844OeXCJ9XG4gICAge2xhYmVsOiBcIkRldmVsb3BtZW50IFRoZW1lc1wiLCB2YWx1ZTogXCLplovnmbrjg4bjg7zjg55cIn1cbiAgICB7bGFiZWw6IFwiR2l0IFRoZW1lc1wiLCB2YWx1ZTogXCJHaXQg44OG44O844OeXCJ9XG4gIF1cbiAgc2V0dGluZ3M6IHtcbiAgICBub3RlczogW1xuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUtc2V0dGluZ3Mtbm90ZSdcbiAgICAgICAgaHRtbDogJ+ODhuOCreOCueODiOe3qOmbhuOBruOBteOCi+OBvuOBhOOBqOOBr+mWouS/guOBruOBquOBhOOCs+OCouOBqumDqOWIhuOBruioreWumumgheebruOBp+OBmeOAguWAi+OAheOBruODkeODg+OCseODvOOCuOOBq+OCguWbuuacieOBruioreWumumgheebruOBjOeUqOaEj+OBleOCjOOBpuOBhOOCi+WgtOWQiOOBjOOBguOCi+OBruOBp+OAgVxuICAgICAgICAgICAgICAg44GT44Gh44KJ44GuIDxhIGNsYXNzPVwibGluayBwYWNrYWdlcy1vcGVuXCI+44OR44OD44Kx44O844K444Oq44K544OIPC9hPiDjgYvjgonjg5Hjg4PjgrHjg7zjgrjjgqvjg7zjg4njgpLjgq/jg6rjg4Pjgq/jgZfjgaboqK3lrprjgpLjgZTnorroqo3jgY/jgaDjgZXjgYTjgIInXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLXNldHRpbmdzLW5vdGUnXG4gICAgICAgIGh0bWw6ICfjg4bjgq3jgrnjg4jnt6jpm4bjga7jgbXjgovjgb7jgYTjgavplqLjgZnjgovoqK3lrprpoIXnm67jgafjgZnjgILoqIDoqp7jga7ln7rmupbjgavjgojjgaPjgabjga/jgZPjgozjgonjga7oqK3lrprjgYzkuIrmm7jjgY3jgZXjgozjgovloLTlkIjjgYzjgYLjgovjgZ/jgoHjgIFcbiAgICAgICAgICAgICAgIOOBk+OBoeOCieOBriA8YSBjbGFzcz1cImxpbmsgcGFja2FnZXMtb3BlblwiPuODkeODg+OCseODvOOCuOODquOCueODiDwvYT4g44GL44KJ44OR44OD44Kx44O844K444Kr44O844OJ44KS44Kv44Oq44OD44Kv44GX44Gm6Kit5a6a44KS44GU56K66KqN44GP44Gg44GV44GE44CCJ1xuICAgICAgfVxuICAgIF1cbiAgICBjb250cm9sczogW1xuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUuYWxsb3dQZW5kaW5nUGFuZUl0ZW1zJ1xuICAgICAgICB0aXRsZTogXCLjg5fjg6zjg5Pjg6Xjg7zjgr/jg5bjgpLkvb/jgYZcIlxuICAgICAgICBkZXNjOiBcIuODhOODquODvOODk+ODpeODvOOBquOBqeOBp+ODleOCoeOCpOODq+OCkumBuOaKnuOBl+OBn+aZguOBq+OCv+ODluOCkuODl+ODrOODk+ODpeODvOeKtuaFi+OBp+mWi+OBjeOBvuOBmeOAglxuICAgICAgICAgICAgICAg44OX44Os44OT44Ol44O85pmC44Gv44K/44OW5ZCN44GM5pac5L2T44Go44Gq44KK44CB5Yil44Gu44OV44Kh44Kk44Or6YG45oqe5pmC44Gr44K/44OW44GM5L2/44GE5Zue44GV44KM44G+44GZ44CCXG4gICAgICAgICAgICAgICDjg4Djg5bjg6vjgq/jg6rjg4Pjgq/jgb7jgZ/jga/nt6jpm4bjgpLplovlp4vjgZnjgovjgZPjgajjgafjg5fjg6zjg5Pjg6Xjg7znirbmhYvjgYzop6PpmaTjgZXjgozjgb7jgZnjgIJcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUuYXVkaW9CZWVwJ1xuICAgICAgICB0aXRsZTogXCLjg5Pjg7zjg5fpn7PjgpLps7TjgonjgZlcIlxuICAgICAgICBkZXNjOiBcIuWHpueQhuOBjOS6iOacn+OBl+OBn+OBqOOBiuOCiuOBq+Wun+ihjOOBleOCjOOBquOBi+OBo+OBn+OCiuOAgee1kOaenOOBjOS9leOCguW+l+OCieOCjOOBquOBi+OBo+OBn+WgtOWQiOOBq+OCt+OCueODhuODoOOBruODk+ODvOODl+mfs+OCkumztOOCieOBl+OBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS5hdXRvbWF0aWNhbGx5VXBkYXRlJ1xuICAgICAgICB0aXRsZTogXCLoh6rli5XjgqLjg4Pjg5fjg4fjg7zjg4hcIlxuICAgICAgICBkZXNjOiBcIuaWsOOBl+OBhOODkOODvOOCuOODp+ODs+OBriBBdG9tIOOBjOODquODquODvOOCueOBleOCjOOBpuOBhOOBn+WgtOWQiOOBq+iHquWLleOBp+OCouODg+ODl+ODh+ODvOODiOOBl+OBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS5jbG9zZURlbGV0ZWRGaWxlVGFicydcbiAgICAgICAgdGl0bGU6IFwi5YmK6Zmk44GV44KM44Gf44OV44Kh44Kk44Or44Gu44K/44OW44KS6ZaJ44GY44KLXCJcbiAgICAgICAgZGVzYzogXCJBdG9tIOOBruWkluOBp+WJiumZpOOBleOCjOOBn+ODleOCoeOCpOODq+OBruOCv+ODluOCkuiHquWLleeahOOBq+mWieOBmOOBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS5hdXRvSGlkZU1lbnVCYXInXG4gICAgICAgIHRpdGxlOiBcIuODoeODi+ODpeODvOODkOODvOOCkuiHquWLleeahOOBq+maoOOBmVwiXG4gICAgICAgIGRlc2M6IFwi44Oh44OL44Ol44O844OQ44O844KS6Ieq5YuV55qE44Gr6Zqg44GX44GmIEFsdCDjgq3jg7zjgafliIfjgormm7/jgYjjgb7jgZnjgILjgZPjga7oqK3lrprjga8gV2luZG93cyDjgaggTGludXgg44Gn44Gu44G/44K144Od44O844OI44GV44KM44G+44GZ44CCXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdjb3JlLmNsb3NlRW1wdHlXaW5kb3dzJ1xuICAgICAgICB0aXRsZTogXCLnqbrjgavjgarjgaPjgZ/jgqbjgqTjg7Pjg4njgqbjgpLjgr/jg5bjgajlkIzmp5jjgavplonjgZjjgotcIlxuICAgICAgICBkZXNjOiBcIuOCpuOCpOODs+ODieOCpuWGheOBq+OCv+ODluOCguODmuOCpOODs+OCguOBquOBhOeKtuaFi+OBp+OCv+ODluOCkumWieOBmOOCi+OCs+ODnuODs+ODieOCkuS4juOBiOOBn+WgtOWQiOOAgeOCpuOCpOODs+ODieOCpuOCkumWieOBmOOBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS5kZXN0cm95RW1wdHlQYW5lcydcbiAgICAgICAgdGl0bGU6IFwi56m644Gr44Gq44Gj44Gf44Oa44Kk44Oz44KS6Ieq5YuV55qE44Gr6ZaJ44GY44KLXCJcbiAgICAgICAgZGVzYzogXCLmnIDlvozjgavplovjgYTjgabjgYTjgZ/jgr/jg5bjgpLplonjgZjjgZ/loLTlkIjjgIHjg5rjgqTjg7PjgoLplonjgZjjgb7jgZnjgIJcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUuZXhjbHVkZVZjc0lnbm9yZWRQYXRocydcbiAgICAgICAgdGl0bGU6IFwi44OQ44O844K444On44Oz566h55CG44K344K544OG44Og44Gr44KI44Gj44Gm54Sh6KaW44GV44KM44Gf44OR44K544KS6Zmk5aSW44GZ44KLXCJcbiAgICAgICAgZGVzYzogXCLnj77lnKjjga7jg5fjg63jgrjjgqfjgq/jg4jjgafkvb/nlKjkuK3jga7jg5Djg7zjgrjjg6fjg7PnrqHnkIbjgrfjgrnjg4bjg6DjgavjgojjgaPjgabnhKHoppbjgZXjgozjgZ/jg5XjgqHjgqTjg6vjgajjg4fjgqPjg6zjgq/jg4jjg6rjgYzjgIHjgYLjgYTjgb7jgYTmpJzntKLjgoTmpJzntKLjgIHnva7mj5vjga7kuK3jgafnhKHoppbjgZXjgozjgovjgojjgYbjgavjgarjgorjgb7jgZnjgIJcbiAgICAgICAgICAgICAgIOS+i+OBiOOBsCBHaXQg44KS5L2/55So44GX44Gm44GE44KL44OX44Ot44K444Kn44Kv44OI44Gn44GvIC5naXRpZ25vcmUg44OV44Kh44Kk44Or44Gn5a6a576p44GV44KM44Gf44OR44K544GM44Gd44KM44Gr44GC44Gf44KK44G+44GZ44CCXG4gICAgICAgICAgICAgICDlgIvjgIXjga7jg5Hjg4PjgrHjg7zjgrjjgavjgoLjgZPjga7oqK3lrprjgajjga/liKXjgavjg5XjgqHjgqTjg6vjgoTjg5Xjgqnjg6vjg4DjgpLnhKHoppbjgZnjgovoqK3lrprjgYzjgYLjgovjgYvjgoLjgZfjgozjgb7jgZvjgpPjgIJcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUuZmlsZUVuY29kaW5nJ1xuICAgICAgICB0aXRsZTogXCLjg5XjgqHjgqTjg6vjgqjjg7PjgrPjg7zjg4fjgqPjg7PjgrBcIlxuICAgICAgICBkZXNjOiBcIuODleOCoeOCpOODq+OCkuiqreOBv+abuOOBjeOBmeOCi+OBn+OCgeOBruODh+ODleOCqeODq+ODiOOCreODo+ODqeOCr+OCv+OCu+ODg+ODiOOCkuaMh+WumuOBl+OBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS5mb2xsb3dTeW1saW5rcydcbiAgICAgICAgdGl0bGU6IFwi44K344Oz44Oc44Oq44OD44Kv44Oq44Oz44Kv44KS44Gf44Gp44KLXCJcbiAgICAgICAgZGVzYzogXCLjgYLjgYTjgb7jgYTmpJzntKLjgafjg5XjgqHjgqTjg6vjgpLmpJzntKLjg7vplovjgY/mmYLjgavkvb/nlKjjgZXjgozjgb7jgZnjgIJcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUuaWdub3JlZE5hbWVzJ1xuICAgICAgICB0aXRsZTogXCLnhKHoppbjgZnjgovjg5XjgqHjgqTjg6tcIlxuICAgICAgICBkZXNjOiBcIueEoeimluOBmeOCiyBnbG9iIOODkeOCv+ODvOODs+OCkuWIl+aMmeOBl+OBvuOBmeOAguODnuODg+ODgeOBl+OBn+ODleOCoeOCpOODq+OBqOODh+OCo+ODrOOCr+ODiOODquOBr+OAgeOBguOBhOOBvuOBhOaknOe0ouOChOODhOODquODvOODk+ODpeODvOOBp+ihqOekuuOBleOCjOOBquOBj+OBquOCiuOBvuOBmeOAglxuICAgICAgICAgICAgICAg5YCL44CF44Gu44OR44OD44Kx44O844K444Gr44KC44GT44Gu6Kit5a6a44Go44Gv5Yil44Gr44OV44Kh44Kk44Or44KE44OV44Kp44Or44OA44KS54Sh6KaW44GZ44KL6Kit5a6a44GM44GC44KL44GL44KC44GX44KM44G+44Gb44KT44CCXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdjb3JlLm9wZW5FbXB0eUVkaXRvck9uU3RhcnQnXG4gICAgICAgIHRpdGxlOiBcIui1t+WLleaZguOBq+aWsOimj+OCqOODh+OCo+OCv+OCkumWi+OBj1wiXG4gICAgICAgIGRlc2M6IFwi6LW35YuV5pmC44Gr5paw6KaP44Gu44Ko44OH44Kj44K/44KS6Ieq5YuV55qE44Gr6ZaL44GN44G+44GZ44CCXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdjb3JlLnByb2plY3RIb21lJ1xuICAgICAgICB0aXRsZTogXCLjg5fjg63jgrjjgqfjgq/jg4jjg5vjg7zjg6BcIlxuICAgICAgICBkZXNjOiBcIuODl+ODreOCuOOCp+OCr+ODiOe+pOOCkumFjee9ruOBmeOCi+ODh+OCo+ODrOOCr+ODiOODquOCkuaMh+WumuOBl+OBvuOBmeOAguODkeODg+OCseODvOOCuOOCuOOCp+ODjeODrOODvOOCv+OBp+S9nOaIkOOBleOCjOOBn+ODkeODg+OCseODvOOCuOOBr+ODh+ODleOCqeODq+ODiOOBp+OBk+OBk+OBjOagvOe0jeWFiOOBqOOBquOCiuOBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS5yZW9wZW5Qcm9qZWN0TWVudUNvdW50J1xuICAgICAgICB0aXRsZTogXCLjg5fjg63jgrjjgqfjgq/jg4jlsaXmrbTjga7ooajnpLrmlbBcIlxuICAgICAgICBkZXNjOiBcIuODoeODi+ODpeODvOOAjOODl+ODreOCuOOCp+OCr+ODiOWxpeattOOBi+OCiemWi+OBj+OAjeOBq+ihqOekuuOBmeOCi+ODl+ODreOCuOOCp+OCr+ODiOOBruaVsOOCkuaMh+WumuOBl+OBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS5yZXN0b3JlUHJldmlvdXNXaW5kb3dzT25TdGFydCdcbiAgICAgICAgdGl0bGU6IFwi6LW35YuV5pmC44Gr5YmN5Zue44Gu44Km44Kk44Oz44OJ44Km6KGo56S654q25oWL44KS5b6p5YWD44GZ44KLXCJcbiAgICAgICAgZGVzYzogXCLjgqLjgqTjgrPjg7PjgoLjgZfjgY/jga8gYXRvbSDjgrPjg57jg7Pjg4njgYvjgonotbfli5XjgZfjgZ/jgajjgY3jgavjgIHmnIDlvozjgavplovjgYTjgabjgYTjgZ8gQXRvbSDjga7jgqbjgqTjg7Pjg4njgqbjgZnjgbnjgabjgpLlvqnlhYPjgZfjgb7jgZnjgIJcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUudGVsZW1ldHJ5Q29uc2VudCdcbiAgICAgICAgdGl0bGU6IFwiQXRvbSDjg4Hjg7zjg6DjgavpgaDpmpTmuKzlrprntZDmnpzjgpLpgIHkv6HjgZnjgotcIlxuICAgICAgICBkZXNjOiBcIuS9v+eUqOe1seioiOODh+ODvOOCv+OBqOmanOWus+ODrOODneODvOODiOOCkiBBdG9tIOODgeODvOODoOOBq+mAgeS/oeOBl+OBpuapn+iDveWQkeS4iuOBq+W9ueeri+OBpuOCi+OBk+OBqOOCkuioseWPr+OBl+OBvuOBmeOAglwiXG4gICAgICAgIHNlbGVjdDpcbiAgICAgICAgICBsaW1pdGVkOiBcIuWMv+WQjeOBp+mZkOWumuOBleOCjOOBn+S9v+eUqOe1seioiOODh+ODvOOCv+OBqOmanOWus+ODrOODneODvOODiOOBrumAgeS/oeOCkuioseWPr+OBmeOCi1wiXG4gICAgICAgICAgbm86IFwi6YGg6ZqU5ris5a6a57WQ5p6c44KS6YCB5L+h44GX44Gq44GEXCJcbiAgICAgICAgICB1bmRlY2lkZWQ6IFwi44G+44Gg5rG644G+44Gj44Gm44GE44Gq44GE77yI5qyh5Zue6LW35YuV5pmC44Gr5YaN56K66KqN77yJXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdjb3JlLnVzZUN1c3RvbVRpdGxlQmFyJ1xuICAgICAgICB0aXRsZTogXCLjgqvjgrnjgr/jg6Djgr/jgqTjg4jjg6vjg5Djg7zjgpLkvb/jgYZcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUudXNlUHJveHlTZXR0aW5nc1doZW5DYWxsaW5nQXBtJ1xuICAgICAgICB0aXRsZTogXCJBUE0g44KS5ZG844G244Go44GN44Gr44OX44Ot44Kt44K36Kit5a6a44KS5L2/44GGXCJcbiAgICAgICAgZGVzYzogXCJBUE0gKEF0b20gUGFja2FnZSBNYW5hZ2VyKSDjga4gYXBtIOOCs+ODnuODs+ODieODqeOCpOODs+ODhOODvOODq+OCkuWRvOOBtuOBqOOBjeOBq+OAgeaknOWHuuOBl+OBn+ODl+ODreOCreOCt+ioreWumuOCkuS9v+OBhOOBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS53YXJuT25MYXJnZUZpbGVMaW1pdCdcbiAgICAgICAgdGl0bGU6IFwi6YeN44GE44OV44Kh44Kk44Or44KS6ZaL44GP5pmC44Gr6K2m5ZGK44GZ44KL44K144Kk44K6XCJcbiAgICAgICAgZGVzYzogXCLmjIflrprjgZfjgZ/jg5XjgqHjgqTjg6vjgrXjgqTjgrrvvIjjg6Hjgqzjg5DjgqTjg4jvvInjgojjgorlpKfjgY3jgarjg5XjgqHjgqTjg6vjgpLplovjgY/liY3jgavorablkYrjgZfjgb7jgZnjgIJcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5hdG9taWNTb2Z0VGFicydcbiAgICAgICAgdGl0bGU6IFwi44Ki44OI44Of44OD44KvIOOCveODleODiOOCv+ODllwiXG4gICAgICAgIGRlc2M6IFwi44Kr44O844K944Or56e75YuV44Gu5pmC44CB44K944OV44OI44K/44OW44Kk44Oz44OH44Oz44OI44Gu56m655m944KS44K/44OW5bmF44Gn44K544Kt44OD44OX44GX44G+44GZ44CCXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3IuYXV0b0luZGVudCdcbiAgICAgICAgdGl0bGU6IFwi6Ieq5YuV44Kk44Oz44OH44Oz44OIXCJcbiAgICAgICAgZGVzYzogXCLmlrDjgZfjgYTooYzjgpLmjL/lhaXvvIjmlLnooYzvvInjgZfjgZ/mmYLjgIHjgqvjg7zjgr3jg6vkvY3nva7jgpLoh6rli5XnmoTjgavjgqTjg7Pjg4fjg7Pjg4jjgZfjgZ/kvY3nva7jgavnp7vli5XjgZfjgb7jgZnjgIJcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5hdXRvSW5kZW50T25QYXN0ZSdcbiAgICAgICAgdGl0bGU6IFwi44Oa44O844K544OI5pmC44Gr6Ieq5YuV44Kk44Oz44OH44Oz44OIXCJcbiAgICAgICAgZGVzYzogXCLjg5rjg7zjgrnjg4jjgZfjgZ/jg4bjgq3jgrnjg4jjgpLnm7TliY3jga7ooYzjga7jgqTjg7Pjg4fjg7Pjg4jjgpLln7rmupbjgavoh6rli5XnmoTjgavjgqTjg7Pjg4fjg7Pjg4jjgZfjgb7jgZnjgIJcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5iYWNrVXBCZWZvcmVTYXZpbmcnXG4gICAgICAgIHRpdGxlOiBcIuS/neWtmOWJjeOBq+ODkOODg+OCr+OCouODg+ODl+OCkuWPluOCi1wiXG4gICAgICAgIGRlc2M6IFwi44OV44Kh44Kk44Or44Gu5L+d5a2Y5Lit44GrIEkvTyDjgqjjg6njg7zjgYznmbrnlJ/jgZfjgZ/loLTlkIjjgavjg5XjgqHjgqTjg6vjga7lhoXlrrnjgYzlpLHjgo/jgozjgarjgYTjgojjgYbjgIHjg5Djg4Pjgq/jgqLjg4Pjg5fnlKjjga7kuIDmmYLjgrPjg5Tjg7zjgpLkvZzmiJDjgZfjgb7jgZnjgIJcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5jb25maXJtQ2hlY2tvdXRIZWFkUmV2aXNpb24nXG4gICAgICAgIHRpdGxlOiBcIuWkieabtOOCkuegtOajhOOBl+OBpiBIRUFEIOODquODk+OCuOODp+ODs+OBq+aIu+OBmeaZguOBq+eiuuiqjeOBmeOCi1wiXG4gICAgICAgIGRlc2M6IFwi44Kz44Oe44Oz44OJIGBFZGl0b3I6IENoZWNrb3V0IEhlYWQgUmV2aXNpb25gIOOCkuS9v+eUqOOBl+OBpiBIRUFEIOODquODk+OCuOODp+ODs+OCkuODgeOCp+ODg+OCr+OCouOCpuODiOOBl+ePvuWcqOOBruWkieabtOWGheWuueOCkuegtOajhOOBmeOCi+WJjeOBq+eiuuiqjeODgOOCpOOCouODreOCsOOCkuihqOekuuOBl+OBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLmZvbnRGYW1pbHknXG4gICAgICAgIHRpdGxlOiBcIuODleOCqeODs+ODiFwiXG4gICAgICAgIGRlc2M6IFwiZm9udC1mYW1pbHlcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5mb250U2l6ZSdcbiAgICAgICAgdGl0bGU6IFwi44OV44Kp44Oz44OI44K144Kk44K6XCJcbiAgICAgICAgZGVzYzogXCJmb250LXNpemUgKHB4KVwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLmludmlzaWJsZXMuY3InXG4gICAgICAgIHRpdGxlOiBcIuS4jeWPr+imluaWh+WtlyDjgq3jg6Pjg6rjg4Pjgrjjg7vjg6rjgr/jg7zjg7MgKENyKVwiXG4gICAgICAgIGRlc2M6IFwi44Kt44Oj44Oq44OD44K444O744Oq44K/44O844Oz77yITWljcm9zb2Z044K544K/44Kk44Or44Gu6KGM5pyr5paH5a2X77yJ44Go44GX44Gm5o+P55S744GZ44KL5paH5a2X77yI44CM5LiN5Y+v6KaW5paH5a2X44KS6KGo56S644CN44KS5pyJ5Yq544Gr44GX44Gm44GE44KL5aC05ZCI77yJXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3IuaW52aXNpYmxlcy5lb2wnXG4gICAgICAgIHRpdGxlOiBcIuS4jeWPr+imluaWh+WtlyDmlLnooYwgKEVvbClcIlxuICAgICAgICBkZXNjOiBcIuaUueihjCAoXFxcXG4pIOOBqOOBl+OBpuaPj+eUu+OBmeOCi+aWh+Wtl++8iOOAjOS4jeWPr+imluaWh+Wtl+OCkuihqOekuuOAjeOCkuacieWKueOBq+OBl+OBpuOBhOOCi+WgtOWQiO+8iVwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLmludmlzaWJsZXMuc3BhY2UnXG4gICAgICAgIHRpdGxlOiBcIuS4jeWPr+imluaWh+WtlyDjgrnjg5rjg7zjgrlcIlxuICAgICAgICBkZXNjOiBcIuOCueODmuODvOOCue+8iOihjOmgreS7peWJjeOBqOihjOacq+S7pemZje+8ieOBqOOBl+OBpuaPj+eUu+OBmeOCi+aWh+Wtl++8iOOAjOS4jeWPr+imluaWh+Wtl+OCkuihqOekuuOAjeOCkuacieWKueOBq+OBl+OBpuOBhOOCi+WgtOWQiO+8iVwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLmludmlzaWJsZXMudGFiJ1xuICAgICAgICB0aXRsZTogXCLkuI3lj6/oppbmloflrZcg44K/44OWXCJcbiAgICAgICAgZGVzYzogXCLjg4/jg7zjg4njgr/jg5bvvIhcXFxcdO+8ieOBqOOBl+OBpuaPj+eUu+OBmeOCi+aWh+Wtl++8iOOAjOS4jeWPr+imluaWh+Wtl+OCkuihqOekuuOAjeOCkuacieWKueOBq+OBl+OBpuOBhOOCi+WgtOWQiO+8iVwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLmxpbmVIZWlnaHQnXG4gICAgICAgIHRpdGxlOiBcIuihjOOBrumrmOOBlVwiXG4gICAgICAgIGRlc2M6IFwibGluZS1oZWlnaHQgKG51bWJlcilcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5ub25Xb3JkQ2hhcmFjdGVycydcbiAgICAgICAgdGl0bGU6IFwi5Y2Y6Kqe44Gu5LiA6YOo44Go44GX44Gm5omx44KP44Gq44GE5paH5a2XXCJcbiAgICAgICAgZGVzYzogXCLljZjoqp7jga7looPnlYzjgpLlrprjgoHjgovjgZ/jgoHjga7mloflrZdcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5wcmVmZXJyZWRMaW5lTGVuZ3RoJ1xuICAgICAgICB0aXRsZTogXCLlj7Pnq6/jgqzjgqTjg4njga7kvY3nva5cIlxuICAgICAgICBkZXNjOiBcIuOAjOWPs+err+OCrOOCpOODieOBruS9jee9ruOBp+OCveODleODiOODqeODg+ODl+OAjeOBjOacieWKueOBquWgtOWQiOOBq+ODhuOCreOCueODiOOCkuaKmOOCiui/lOOBmeS9jee9ruOCkuaWh+Wtl+aVsOOBp+aMh+WumuOBl+OBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLnNjcm9sbFBhc3RFbmQnXG4gICAgICAgIHRpdGxlOiBcIuacgOe1guihjOOCkui2heOBiOOBpuOCueOCr+ODreODvOODq1wiXG4gICAgICAgIGRlc2M6IFwi44Ko44OH44Kj44K/44Gr5pyA57WC6KGM44GM6KGo56S644GV44KM44Gf5Zyw54K544Gn44K544Kv44Ot44O844Or44KS5q2i44KB44Gq44GE44KI44GG44Gr44GX44G+44GZ44CCXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3Iuc2Nyb2xsU2Vuc2l0aXZpdHknXG4gICAgICAgIHRpdGxlOiBcIuOCueOCr+ODreODvOODq+mAn+W6plwiXG4gICAgICAgIGRlc2M6IFwi44Oe44Km44K544KE44OI44Op44OD44Kv44OR44OD44OJ44Gn44Ko44OH44Kj44K/44KS44K544Kv44Ot44O844Or44GZ44KL5pmC44Gu6YCf5bqmXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3Iuc2hvd0N1cnNvck9uU2VsZWN0aW9uJ1xuICAgICAgICB0aXRsZTogXCLpgbjmip7nr4Tlm7Ljgavjgqvjg7zjgr3jg6vjgpLooajnpLpcIlxuICAgICAgICBkZXNjOiBcIumBuOaKnuevhOWbsuOBjOWtmOWcqOOBmeOCi+WgtOWQiOOBq+OCq+ODvOOCveODq++8iOeCuea7heOBmeOCi++8qeODk+ODvOODoO+8ieOCkuihqOekuuOBl+OBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLnNob3dJbmRlbnRHdWlkZSdcbiAgICAgICAgdGl0bGU6IFwi44Kk44Oz44OH44Oz44OI44Ks44Kk44OJ44KS6KGo56S6XCJcbiAgICAgICAgZGVzYzogXCLjgqjjg4fjgqPjgr/lhoXjgavjgqTjg7Pjg4fjg7Pjg4jjgqzjgqTjg4njgpLooajnpLrjgZfjgb7jgZnjgIJcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5zaG93SW52aXNpYmxlcydcbiAgICAgICAgdGl0bGU6IFwi5LiN5Y+v6KaW5paH5a2X44KS6KGo56S6XCJcbiAgICAgICAgZGVzYzogXCLjgr/jg5bjgoTjgrnjg5rjg7zjgrnjgIHmlLnooYzjgarjganjga7opovjgYjjgarjgYTmloflrZfjgpLoqJjlj7fjgajjgZfjgabooajnpLrjgZfjgb7jgZnjgIJcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5zaG93TGluZU51bWJlcnMnXG4gICAgICAgIHRpdGxlOiBcIuihjOeVquWPt+OCkuihqOekulwiXG4gICAgICAgIGRlc2M6IFwi44Ko44OH44Kj44K/5YaF44Gr6KGM55Wq5Y+344KS6KGo56S644GX44G+44GZ44CCXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3Iuc29mdFRhYnMnXG4gICAgICAgIHRpdGxlOiBcIuOCveODleODiOOCv+ODllwiXG4gICAgICAgIGRlc2M6IFwi44K/44OW5paH5a2X44Gu5Luj44KP44KK44Gr44K544Oa44O844K544KS6YCj44Gt44Gm5oy/5YWl44GX44G+44GZ44CCXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3Iuc29mdFdyYXAnXG4gICAgICAgIHRpdGxlOiBcIuOCveODleODiOODqeODg+ODl1wiXG4gICAgICAgIGRlc2M6IFwi44Km44Kj44Oz44OJ44Km5bmF44KS6LaF44GI44Gf5pmC44Gr5oqY44KK6L+U44GX44Gm6KGo56S644GX44G+44GZ44CC44CM5Y+z56uv44Ks44Kk44OJ44Gu5L2N572u44Gn44K944OV44OI44Op44OD44OX44CN44GM5pyJ5Yq544Gu5aC05ZCI44Gv44CM5Y+z56uv44Ks44Kk44OJ44Gu5L2N572u44CN44Gu6Kit5a6a5YCk44Gn5oqY44KK6L+U44GV44KM44G+44GZ44CCXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3Iuc29mdFdyYXBBdFByZWZlcnJlZExpbmVMZW5ndGgnXG4gICAgICAgIHRpdGxlOiBcIuWPs+err+OCrOOCpOODieOBruS9jee9ruOBp+OCveODleODiOODqeODg+ODl1wiXG4gICAgICAgIGRlc2M6IFwi44CM5Y+z56uv44Ks44Kk44OJ44Gu5L2N572u44CN44Gu6Kit5a6a5YCk44Gn5oqY44KK6L+U44GX44G+44GZ44CC44GT44Gu6Kit5a6a44Gv44K944OV44OI44Op44OD44OX44GM44Kw44Ot44O844OQ44Or44G+44Gf44Gv5L2c5qWt5Lit44Gu6KiA6Kqe44Gn5pyJ5Yq544Gq5aC05ZCI44Gu44G/6YGp55So44GV44KM44G+44GZ44CCXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3Iuc29mdFdyYXBIYW5naW5nSW5kZW50J1xuICAgICAgICB0aXRsZTogXCLjgr3jg5Xjg4jjg6njg4Pjg5fmmYLjga7jgqTjg7Pjg4fjg7Pjg4jluYVcIlxuICAgICAgICBkZXNjOiBcIuOAjOOCveODleODiOODqeODg+ODl+OAjeOBjOacieWKueOBquWgtOWQiOOAgeODqeODg+ODl+OBleOCjOOBn+ihjOOBq+WvvuOBl+aMh+WumuOBl+OBn+aWh+Wtl+aVsOOBoOOBkei/veWKoOOBp+OCpOODs+ODh+ODs+ODiOOBl+OBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLnRhYkxlbmd0aCdcbiAgICAgICAgdGl0bGU6IFwi44K/44OW5bmFXCJcbiAgICAgICAgZGVzYzogXCLjgr/jg5bjgpLooajjgZnpmpvjgavkvb/nlKjjgZXjgozjgovjgrnjg5rjg7zjgrnjga7mlbBcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci50YWJUeXBlJ1xuICAgICAgICB0aXRsZTogXCLjgr/jg5bjgr/jgqTjg5dcIlxuICAgICAgICBkZXNjOiAn44K/44OW44Kt44O844KS5oq844GX44Gf6Zqb44Gr5oy/5YWl44GZ44KL5paH5a2X44Gu5b2i5byP44KS5oyH5a6a44GX44G+44GZ44CCXCJzb2Z0XCIg44Gv44K944OV44OI44K/44OW77yIU3BhY2XvvInjgIFcImhhcmRcIiDjga/jg4/jg7zjg4njgr/jg5bvvIhUYWLvvInjgYzkvb/nlKjjgZXjgozjgb7jgZnjgIJcbiAgICAgICAgICAgICAgIFwiYXV0b1wiIOOBr+OCqOODh+OCo+OCv+OBjOODkOODg+ODleOCoeOBruWGheWuueOCkuiHquWLleWIpOWIpeOBl+OBvuOBmeOAguiHquWLleWIpOWIpeOBr+acgOWIneOBq+imi+OBpOOBkeOBn+ihjO+8iOOCs+ODoeODs+ODiOihjOOCkumZpOOBj++8ieOBruWFiOmgreOBq+OBguOCi+OCueODmuODvOOCueOBp+ihjOOCj+OCjOOBvuOBmeOAglxuICAgICAgICAgICAgICAg6Ieq5YuV5Yik5Yil44Gn44GN44Gq44GL44Gj44Gf5aC05ZCI44Gv44K944OV44OI44K/44OW44GM6Kit5a6a44GV44KM44G+44GZ44CCJ1xuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci51bmRvR3JvdXBpbmdJbnRlcnZhbCdcbiAgICAgICAgdGl0bGU6IFwi5Y+W44KK5raI44GX5pON5L2c5Y2Y5L2NXCJcbiAgICAgICAgZGVzYzogXCLjgbLjgajjgb7jgajjgb7jgorjga7mk43kvZzjgajoqo3orZjjgZXjgZvjgablj5bjgormtojjgZflsaXmrbTjgavnmbvpjLLjgZnjgovplpPpmpTvvIjjg5/jg6rnp5LvvIlcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci56b29tRm9udFdoZW5DdHJsU2Nyb2xsaW5nJ1xuICAgICAgICB0aXRsZTogXCJDdHJsIOOCueOCr+ODreODvOODq+OBp+ODleOCqeODs+ODiOOCteOCpOOCuuOCkuWkieOBiOOCi1wiXG4gICAgICAgIGRlc2M6IFwi44Kz44Oz44OI44Ot44O844Or44Kt44O844KS5oq844GX44Gq44GM44KJ44K544Kv44Ot44O844Or44KS5LiK5LiL44GZ44KL44GT44Go44Gn44Ko44OH44Kj44K/44Gu44OV44Kp44Oz44OI44K144Kk44K644KS5ouh5aSnL+e4ruWwj+OBl+OBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnc3lzdGVtLndpbmRvd3MuZmlsZS1oYW5kbGVyJ1xuICAgICAgICB0aXRsZTogXCLjg5XjgqHjgqTjg6vjgpLlj5bmibHjgYbjgqLjg5fjg6rjgajjgZfjgabnmbvpjLLjgZnjgotcIlxuICAgICAgICBkZXNjOiBcIuODleOCoeOCpOODq+OBrumWoumAo+S7mOOBkeOCkuewoeWNmOOBq+OBmeOCi+OBn+OCgeOBq+OAgUF0b20g44KS44CM44OX44Ot44Kw44Op44Og44GL44KJ6ZaL44GPLi4u44CN44Gu5LiA6Kan44Gr6KGo56S644GX44G+44GZ44CCXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzeXN0ZW0ud2luZG93cy5zaGVsbC1tZW51LWZpbGVzJ1xuICAgICAgICB0aXRsZTogXCLjg5XjgqHjgqTjg6vjga7lj7Pjgq/jg6rjg4Pjgq/jg6Hjg4vjg6Xjg7zjgYvjgonplovjgY9cIlxuICAgICAgICBkZXNjOiBcIuOCqOOCr+OCueODl+ODreODvOODqeOBp+OBruODleOCoeOCpOODq+WPs+OCr+ODquODg+OCr+ODoeODi+ODpeODvOOBqyBcXFwiT3BlbiB3aXRoIEF0b21cXFwiIOOCkui/veWKoOOBl+OBvuOBmeOAglwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnc3lzdGVtLndpbmRvd3Muc2hlbGwtbWVudS1mb2xkZXJzJ1xuICAgICAgICB0aXRsZTogXCLjg5Xjgqnjg6vjg4Djga7lj7Pjgq/jg6rjg4Pjgq/jg6Hjg4vjg6Xjg7zjgYvjgonplovjgY9cIlxuICAgICAgICBkZXNjOiBcIuOCqOOCr+OCueODl+ODreODvOODqeOBp+OBruODleOCqeODq+ODgOWPs+OCr+ODquODg+OCr+ODoeODi+ODpeODvOOBqyBcXFwiT3BlbiB3aXRoIEF0b21cXFwiIOOCkui/veWKoOOBl+OBvuOBmeOAglwiXG4gICAgICB9XG4gICAgXVxuICB9XG59XG4iXX0=
