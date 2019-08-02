(function() {
  module.exports = {
    Menu: {
      "&File": {
        value: "ファイル(&F)",
        submenu: {
          "New &Window": {
            value: "新規ウインドウ(&W)"
          },
          "&New File": {
            value: "新規ファイル(&N)"
          },
          "&Open File…": {
            value: "開く(&O)..."
          },
          "Open Folder…": {
            value: "フォルダを開く..."
          },
          "Add Project Folder…": {
            value: "プロジェクトフォルダを追加..."
          },
          "Reopen Project": {
            value: "プロジェクト履歴から開く",
            submenu: {
              "Clear Project History": {
                value: "プロジェクト履歴をクリア"
              }
            }
          },
          "Reopen Last &Item": {
            value: "最後に使用したファイルを開く(&I)"
          },
          "&Save": {
            value: "保存(&S)"
          },
          "Save &As…": {
            value: "別名で保存(&A)..."
          },
          "Save A&ll": {
            value: "すべて保存(&L)"
          },
          "&Close Tab": {
            value: "タブを閉じる(&C)"
          },
          "Close &Pane": {
            value: "ペインを閉じる(&P)"
          },
          "Clos&e Window": {
            value: "ウインドウを閉じる(&E)"
          },
          "Quit": {
            value: "終了"
          },
          "Close All Tabs": {
            value: "タブをすべて閉じる"
          }
        }
      },
      "&Edit": {
        value: "編集(&E)",
        submenu: {
          "&Undo": {
            value: "取り消す(&U)"
          },
          "&Redo": {
            value: "やり直す(&R)"
          },
          "&Cut": {
            value: "カット(&C)"
          },
          "C&opy": {
            value: "コピー(&O)"
          },
          "Copy Pat&h": {
            value: "パスをコピー(&H)"
          },
          "&Paste": {
            value: "ペースト(&P)"
          },
          "Select &All": {
            value: "すべて選択(&A)"
          },
          "&Toggle Comments": {
            value: "コメントの切替(&T)"
          },
          Lines: {
            value: "行",
            submenu: {
              "&Indent": {
                value: "インデントを追加(&I)"
              },
              "&Outdent": {
                value: "インデントを戻す(&O)"
              },
              "&Auto Indent": {
                value: "自動インデント(&A)"
              },
              "Move Line &Up": {
                value: "選択中の行を上に移動(&U)"
              },
              "Move Line &Down": {
                value: "選択中の行を下に移動(&D)"
              },
              "Du&plicate Lines": {
                value: "行を複製(&P)"
              },
              "D&elete Line": {
                value: "行を削除(&E)"
              },
              "&Join Lines": {
                value: "行を結合(&J)"
              }
            }
          },
          Columns: {
            value: "列",
            submenu: {
              "Move Selection &Left": {
                value: "選択範囲を左に移動(&L)"
              },
              "Move Selection &Right": {
                value: "選択範囲を右に移動(&R)"
              }
            }
          },
          Text: {
            value: "テキスト",
            submenu: {
              "&Upper Case": {
                value: "大文字に変換(&U)"
              },
              "&Lower Case": {
                value: "小文字に変換(&L)"
              },
              "Delete to End of &Word": {
                value: "単語の末尾まで削除(&W)"
              },
              "Delete to Previous Word Boundary": {
                value: "前の単語の境界まで削除"
              },
              "Delete to Next Word Boundary": {
                value: "次の単語の境界まで削除"
              },
              "&Delete Line": {
                value: "行を削除(&D)"
              },
              "&Transpose": {
                value: "前後を入れ替え(&T)"
              }
            }
          },
          Folding: {
            value: "折りたたみ",
            submenu: {
              "&Fold": {
                value: "折りたたむ(&F)"
              },
              "&Unfold": {
                value: "折りたたみを戻す(&U)"
              },
              "Unfold &All": {
                value: "すべての折りたたみを戻す(&A)"
              },
              "Fol&d All": {
                value: "すべて折りたたむ(&D)"
              },
              "Fold Level 1": {
                value: "1段階折りたたむ"
              },
              "Fold Level 2": {
                value: "2段階折りたたむ"
              },
              "Fold Level 3": {
                value: "3段階折りたたむ"
              },
              "Fold Level 4": {
                value: "4段階折りたたむ"
              },
              "Fold Level 5": {
                value: "5段階折りたたむ"
              },
              "Fold Level 6": {
                value: "6段階折りたたむ"
              },
              "Fold Level 7": {
                value: "7段階折りたたむ"
              },
              "Fold Level 8": {
                value: "8段階折りたたむ"
              },
              "Fold Level 9": {
                value: "9段階折りたたむ"
              }
            }
          },
          "&Preferences": {
            value: "環境設定(&P)..."
          },
          "Config…": {
            value: "個人設定..."
          },
          "Init Script…": {
            value: "起動スクリプト..."
          },
          "Keymap…": {
            value: "キーマップ..."
          },
          "Snippets…": {
            value: "スニペット..."
          },
          "Stylesheet…": {
            value: "スタイルシート..."
          },
          "Reflow Selection": {
            value: "選択範囲をリフロー"
          },
          Bookmark: {
            value: "ブックマーク",
            submenu: {
              "View All": {
                value: "すべて表示"
              },
              "Toggle Bookmark": {
                value: "ブックマークの切替"
              },
              "Jump to Next Bookmark": {
                value: "次のブックマークへ"
              },
              "Jump to Previous Bookmark": {
                value: "前のブックマークへ"
              }
            }
          },
          "Select Encoding": {
            value: "エンコーディング選択"
          },
          "Go to Line": {
            value: "指定行に移動"
          },
          "Select Grammar": {
            value: "文法を選択"
          }
        }
      },
      "&View": {
        value: "表示(&V)",
        submenu: {
          "Toggle &Full Screen": {
            value: "フルスクリーン切替(&F)"
          },
          "Toggle Menu Bar": {
            value: "メニューバー切替"
          },
          Panes: {
            value: "ペイン",
            submenu: {
              "Split Up": {
                value: "ペイン分割 ↑"
              },
              "Split Down": {
                value: "ペイン分割 ↓"
              },
              "Split Left": {
                value: "ペイン分割 ←"
              },
              "Split Right": {
                value: "ペイン分割 →"
              },
              "Focus Next Pane": {
                value: "次のペインにフォーカス"
              },
              "Focus Previous Pane": {
                value: "前のペインにフォーカス"
              },
              "Focus Pane Above": {
                value: "ペインにフォーカス ↑"
              },
              "Focus Pane Below": {
                value: "ペインにフォーカス ↓"
              },
              "Focus Pane On Left": {
                value: "ペインにフォーカス ←"
              },
              "Focus Pane On Right": {
                value: "ペインにフォーカス →"
              },
              "Close Pane": {
                value: "ペインを閉じる"
              }
            }
          },
          Developer: {
            value: "開発",
            submenu: {
              "Open In &Dev Mode…": {
                value: "開発モードで開く(&D)..."
              },
              "&Reload Window": {
                value: "ウィンドウの再読み込み(&R)"
              },
              "Run Package &Specs": {
                value: "パッケージスペックを実行(&S)"
              },
              "Toggle Developer &Tools": {
                value: "デベロッパー ツール(&T)"
              }
            }
          },
          "&Increase Font Size": {
            value: "フォントサイズの拡大"
          },
          "&Decrease Font Size": {
            value: "フォントサイズの縮小"
          },
          "Re&set Font Size": {
            value: "フォントサイズのリセット"
          },
          "Toggle Soft &Wrap": {
            value: "自動折り返しの切替(&W)"
          },
          "Toggle Command Palette": {
            value: "コマンドパレット"
          },
          "Toggle Tree View": {
            value: "ツリービュー"
          }
        }
      },
      "&Selection": {
        value: "選択(&S)",
        submenu: {
          "Add Selection &Above": {
            value: "選択範囲を広げる ↑(&A)"
          },
          "Add Selection &Below": {
            value: "選択範囲を広げる ↓(&B)"
          },
          "S&plit into Lines": {
            value: "選択範囲を各行に分割して同時操作(&P)"
          },
          "Single Selection": {
            value: "同時操作状態を解除"
          },
          "Select to &Top": {
            value: "ファイル先頭まで選択(&T)"
          },
          "Select to Botto&m": {
            value: "ファイル末尾まで選択(&M)"
          },
          "Select &Line": {
            value: "行を選択(&L)"
          },
          "Select &Word": {
            value: "単語を選択(&W)"
          },
          "Select to Beginning of W&ord": {
            value: "単語の先頭まで選択(&O)"
          },
          "Select to Beginning of L&ine": {
            value: "行頭まで選択(&I)"
          },
          "Select to First &Character of Line": {
            value: "行の最初の文字まで選択(&C)"
          },
          "Select to End of Wor&d": {
            value: "単語の末尾まで選択(&D)"
          },
          "Select to End of Lin&e": {
            value: "行末まで選択(&E)"
          },
          "Select Inside Brackets": {
            value: "カッコ内を選択"
          }
        }
      },
      "F&ind": {
        value: "検索(&I)",
        submenu: {
          "Find in Buffer": {
            value: "検索..."
          },
          "Replace in Buffer": {
            value: "置換..."
          },
          "Select Next": {
            value: "次の一致も選択"
          },
          "Select All": {
            value: "一致をすべて選択"
          },
          "Toggle Find in Buffer": {
            value: "検索パネル切替"
          },
          "Find in Project": {
            value: "プロジェクト内検索..."
          },
          "Toggle Find in Project": {
            value: "プロジェクト内検索パネル切替"
          },
          "Find All": {
            value: "すべて検索"
          },
          "Find Next": {
            value: "次を検索"
          },
          "Find Previous": {
            value: "前を検索"
          },
          "Replace Next": {
            value: "次を置換"
          },
          "Replace All": {
            value: "すべて置換"
          },
          "Clear History": {
            value: "履歴をクリア"
          },
          "Find Buffer": {
            value: "バッファを検索"
          },
          "Find File": {
            value: "ファイルを検索"
          },
          "Find Modified File": {
            value: "修正されたファイルを検索"
          }
        }
      },
      "&Packages": {
        value: "パッケージ(&P)"
      },
      "&Help": {
        value: "ヘルプ(&H)",
        submenu: {
          "View &Terms of Use": {
            value: "利用条件(&T)"
          },
          "View &License": {
            value: "ライセンス(&L)"
          },
          "&Documentation": {
            value: "ドキュメント(&D)"
          },
          Roadmap: {
            value: "ロードマップ"
          },
          "Frequently Asked Questions": {
            value: "よくあるご質問"
          },
          "Community Discussions": {
            value: "コミュニティ ディスカッション"
          },
          "Report Issue": {
            value: "問題の報告"
          },
          "Search Issues": {
            value: "報告されている問題"
          },
          "About Atom": {
            value: "Atom について"
          },
          "Welcome Guide": {
            value: "ウェルカムガイド"
          }
        }
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9qYXBhbmVzZS1tZW51L2RlZi9tZW51X2xpbnV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0lBQ2pCLElBQUEsRUFDRTtNQUFBLE9BQUEsRUFDRTtRQUFBLEtBQUEsRUFBTyxVQUFQO1FBQ0EsT0FBQSxFQUNFO1VBQUEsYUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLGFBQVA7V0FERjtVQUVBLFdBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxZQUFQO1dBSEY7VUFJQSxhQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sV0FBUDtXQUxGO1VBTUEsY0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFlBQVA7V0FQRjtVQVFBLHFCQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sa0JBQVA7V0FURjtVQVVBLGdCQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sY0FBUDtZQUNBLE9BQUEsRUFDRTtjQUFBLHVCQUFBLEVBQ0U7Z0JBQUEsS0FBQSxFQUFPLGNBQVA7ZUFERjthQUZGO1dBWEY7VUFlQSxtQkFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLG9CQUFQO1dBaEJGO1VBaUJBLE9BQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxRQUFQO1dBbEJGO1VBbUJBLFdBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxjQUFQO1dBcEJGO1VBcUJBLFdBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxXQUFQO1dBdEJGO1VBdUJBLFlBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxZQUFQO1dBeEJGO1VBeUJBLGFBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxhQUFQO1dBMUJGO1VBMkJBLGVBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxlQUFQO1dBNUJGO1VBNkJBLE1BQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxJQUFQO1dBOUJGO1VBK0JBLGdCQUFBLEVBQ0U7WUFB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VUEsdUJBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxpQkFBUDtXQVhGO1VBWUEsY0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLE9BQVA7V0FiRjtVQWNBLGVBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxXQUFQO1dBZkY7VUFnQkEsWUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFdBQVA7V0FqQkY7VUFrQkEsZUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFVBQVA7V0FuQkY7U0FGRjtPQTFSRjtLQUZlOztBQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuTWVudTpcbiAgXCImRmlsZVwiOlxuICAgIHZhbHVlOiBcIuODleOCoeOCpOODqygmRilcIlxuICAgIHN1Ym1lbnU6XG4gICAgICBcIk5ldyAmV2luZG93XCI6XG4gICAgICAgIHZhbHVlOiBcIuaWsOimj+OCpuOCpOODs+ODieOCpigmVylcIlxuICAgICAgXCImTmV3IEZpbGVcIjpcbiAgICAgICAgdmFsdWU6IFwi5paw6KaP44OV44Kh44Kk44OrKCZOKVwiXG4gICAgICBcIiZPcGVuIEZpbGXigKZcIjpcbiAgICAgICAgdmFsdWU6IFwi6ZaL44GPKCZPKS4uLlwiXG4gICAgICBcIk9wZW4gRm9sZGVy4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleOCqeODq+ODgOOCkumWi+OBjy4uLlwiXG4gICAgICBcIkFkZCBQcm9qZWN0IEZvbGRlcuKAplwiOlxuICAgICAgICB2YWx1ZTogXCLjg5fjg63jgrjjgqfjgq/jg4jjg5Xjgqnjg6vjg4DjgpLov73liqAuLi5cIlxuICAgICAgXCJSZW9wZW4gUHJvamVjdFwiOlxuICAgICAgICB2YWx1ZTogXCLjg5fjg63jgrjjgqfjgq/jg4jlsaXmrbTjgYvjgonplovjgY9cIlxuICAgICAgICBzdWJtZW51OlxuICAgICAgICAgIFwiQ2xlYXIgUHJvamVjdCBIaXN0b3J5XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5fjg63jgrjjgqfjgq/jg4jlsaXmrbTjgpLjgq/jg6rjgqJcIlxuICAgICAgXCJSZW9wZW4gTGFzdCAmSXRlbVwiOlxuICAgICAgICB2YWx1ZTogXCLmnIDlvozjgavkvb/nlKjjgZfjgZ/jg5XjgqHjgqTjg6vjgpLplovjgY8oJkkpXCJcbiAgICAgIFwiJlNhdmVcIjpcbiAgICAgICAgdmFsdWU6IFwi5L+d5a2YKCZTKVwiXG4gICAgICBcIlNhdmUgJkFz4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIuWIpeWQjeOBp+S/neWtmCgmQSkuLi5cIlxuICAgICAgXCJTYXZlIEEmbGxcIjpcbiAgICAgICAgdmFsdWU6IFwi44GZ44G544Gm5L+d5a2YKCZMKVwiXG4gICAgICBcIiZDbG9zZSBUYWJcIjpcbiAgICAgICAgdmFsdWU6IFwi44K/44OW44KS6ZaJ44GY44KLKCZDKVwiXG4gICAgICBcIkNsb3NlICZQYW5lXCI6XG4gICAgICAgIHZhbHVlOiBcIuODmuOCpOODs+OCkumWieOBmOOCiygmUClcIlxuICAgICAgXCJDbG9zJmUgV2luZG93XCI6XG4gICAgICAgIHZhbHVlOiBcIuOCpuOCpOODs+ODieOCpuOCkumWieOBmOOCiygmRSlcIlxuICAgICAgXCJRdWl0XCI6XG4gICAgICAgIHZhbHVlOiBcIue1guS6hlwiXG4gICAgICBcIkNsb3NlIEFsbCBUYWJzXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCv+ODluOCkuOBmeOBueOBpumWieOBmOOCi1wiXG4gIFwiJkVkaXRcIjpcbiAgICB2YWx1ZTogXCLnt6jpm4YoJkUpXCJcbiAgICBzdWJtZW51OlxuICAgICAgXCImVW5kb1wiOlxuICAgICAgICB2YWx1ZTogXCLlj5bjgormtojjgZkoJlUpXCJcbiAgICAgIFwiJlJlZG9cIjpcbiAgICAgICAgdmFsdWU6IFwi44KE44KK55u044GZKCZSKVwiXG4gICAgICBcIiZDdXRcIjpcbiAgICAgICAgdmFsdWU6IFwi44Kr44OD44OIKCZDKVwiXG4gICAgICBcIkMmb3B5XCI6XG4gICAgICAgIHZhbHVlOiBcIuOCs+ODlOODvCgmTylcIlxuICAgICAgXCJDb3B5IFBhdCZoXCI6XG4gICAgICAgIHZhbHVlOiBcIuODkeOCueOCkuOCs+ODlOODvCgmSClcIlxuICAgICAgXCImUGFzdGVcIjpcbiAgICAgICAgdmFsdWU6IFwi44Oa44O844K544OIKCZQKVwiXG4gICAgICBcIlNlbGVjdCAmQWxsXCI6XG4gICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpumBuOaKnigmQSlcIlxuICAgICAgXCImVG9nZ2xlIENvbW1lbnRzXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCs+ODoeODs+ODiOOBruWIh+abvygmVClcIlxuICAgICAgTGluZXM6XG4gICAgICAgIHZhbHVlOiBcIuihjFwiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgXCImSW5kZW50XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjgqTjg7Pjg4fjg7Pjg4jjgpLov73liqAoJkkpXCJcbiAgICAgICAgICBcIiZPdXRkZW50XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjgqTjg7Pjg4fjg7Pjg4jjgpLmiLvjgZkoJk8pXCJcbiAgICAgICAgICBcIiZBdXRvIEluZGVudFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi6Ieq5YuV44Kk44Oz44OH44Oz44OIKCZBKVwiXG4gICAgICAgICAgXCJNb3ZlIExpbmUgJlVwXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLpgbjmip7kuK3jga7ooYzjgpLkuIrjgavnp7vli5UoJlUpXCJcbiAgICAgICAgICBcIk1vdmUgTGluZSAmRG93blwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi6YG45oqe5Lit44Gu6KGM44KS5LiL44Gr56e75YuVKCZEKVwiXG4gICAgICAgICAgXCJEdSZwbGljYXRlIExpbmVzXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLooYzjgpLopIfoo70oJlApXCJcbiAgICAgICAgICBcIkQmZWxldGUgTGluZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi6KGM44KS5YmK6ZmkKCZFKVwiXG4gICAgICAgICAgXCImSm9pbiBMaW5lc1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwi6KGM44KS57WQ5ZCIKCZKKVwiXG4gICAgICBDb2x1bW5zOlxuICAgICAgICB2YWx1ZTogXCLliJdcIlxuICAgICAgICBzdWJtZW51OlxuICAgICAgICAgIFwiTW92ZSBTZWxlY3Rpb24gJkxlZnRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIumBuOaKnuevhOWbsuOCkuW3puOBq+enu+WLlSgmTClcIlxuICAgICAgICAgIFwiTW92ZSBTZWxlY3Rpb24gJlJpZ2h0XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLpgbjmip7nr4Tlm7LjgpLlj7Pjgavnp7vli5UoJlIpXCJcbiAgICAgIFRleHQ6XG4gICAgICAgIHZhbHVlOiBcIuODhuOCreOCueODiFwiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgXCImVXBwZXIgQ2FzZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi5aSn5paH5a2X44Gr5aSJ5o+bKCZVKVwiXG4gICAgICAgICAgXCImTG93ZXIgQ2FzZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi5bCP5paH5a2X44Gr5aSJ5o+bKCZMKVwiXG4gICAgICAgICAgXCJEZWxldGUgdG8gRW5kIG9mICZXb3JkXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLljZjoqp7jga7mnKvlsL7jgb7jgafliYrpmaQoJlcpXCJcbiAgICAgICAgICBcIkRlbGV0ZSB0byBQcmV2aW91cyBXb3JkIEJvdW5kYXJ5XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLliY3jga7ljZjoqp7jga7looPnlYzjgb7jgafliYrpmaRcIlxuICAgICAgICAgIFwiRGVsZXRlIHRvIE5leHQgV29yZCBCb3VuZGFyeVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi5qyh44Gu5Y2Y6Kqe44Gu5aKD55WM44G+44Gn5YmK6ZmkXCJcbiAgICAgICAgICBcIiZEZWxldGUgTGluZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi6KGM44KS5YmK6ZmkKCZEKVwiXG4gICAgICAgICAgXCImVHJhbnNwb3NlXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLliY3lvozjgpLlhaXjgozmm7/jgYgoJlQpXCJcbiAgICAgIEZvbGRpbmc6XG4gICAgICAgIHZhbHVlOiBcIuaKmOOCiuOBn+OBn+OBv1wiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgXCImRm9sZFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi5oqY44KK44Gf44Gf44KAKCZGKVwiXG4gICAgICAgICAgXCImVW5mb2xkXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLmipjjgorjgZ/jgZ/jgb/jgpLmiLvjgZkoJlUpXCJcbiAgICAgICAgICBcIlVuZm9sZCAmQWxsXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjgZnjgbnjgabjga7mipjjgorjgZ/jgZ/jgb/jgpLmiLvjgZkoJkEpXCJcbiAgICAgICAgICBcIkZvbCZkIEFsbFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44GZ44G544Gm5oqY44KK44Gf44Gf44KAKCZEKVwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDFcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIjHmrrXpmo7mipjjgorjgZ/jgZ/jgoBcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCAyXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCIy5q616ZqO5oqY44KK44Gf44Gf44KAXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgM1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwiM+autemajuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIjTmrrXpmo7mipjjgorjgZ/jgZ/jgoBcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCA1XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCI15q616ZqO5oqY44KK44Gf44Gf44KAXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgNlwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiNuautemajuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDdcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIjfmrrXpmo7mipjjgorjgZ/jgZ/jgoBcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCA4XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCI45q616ZqO5oqY44KK44Gf44Gf44KAXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgOVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiOeautemajuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICBcIiZQcmVmZXJlbmNlc1wiOlxuICAgICAgICB2YWx1ZTogXCLnkrDlooPoqK3lrpooJlApLi4uXCJcbiAgICAgIFwiQ29uZmln4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIuWAi+S6uuioreWumi4uLlwiXG4gICAgICBcIkluaXQgU2NyaXB04oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIui1t+WLleOCueOCr+ODquODl+ODiC4uLlwiXG4gICAgICBcIktleW1hcOKAplwiOlxuICAgICAgICB2YWx1ZTogXCLjgq3jg7zjg57jg4Pjg5cuLi5cIlxuICAgICAgXCJTbmlwcGV0c+KAplwiOlxuICAgICAgICB2YWx1ZTogXCLjgrnjg4vjg5rjg4Pjg4guLi5cIlxuICAgICAgXCJTdHlsZXNoZWV04oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCueOCv+OCpOODq+OCt+ODvOODiC4uLlwiXG4gICAgICBcIlJlZmxvdyBTZWxlY3Rpb25cIjpcbiAgICAgICAgdmFsdWU6IFwi6YG45oqe56+E5Zuy44KS44Oq44OV44Ot44O8XCJcbiAgICAgIEJvb2ttYXJrOlxuICAgICAgICB2YWx1ZTogXCLjg5bjg4Pjgq/jg57jg7zjgq9cIlxuICAgICAgICBzdWJtZW51OlxuICAgICAgICAgIFwiVmlldyBBbGxcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpuihqOekulwiXG4gICAgICAgICAgXCJUb2dnbGUgQm9va21hcmtcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODluODg+OCr+ODnuODvOOCr+OBruWIh+abv1wiXG4gICAgICAgICAgXCJKdW1wIHRvIE5leHQgQm9va21hcmtcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuasoeOBruODluODg+OCr+ODnuODvOOCr+OBuFwiXG4gICAgICAgICAgXCJKdW1wIHRvIFByZXZpb3VzIEJvb2ttYXJrXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLliY3jga7jg5bjg4Pjgq/jg57jg7zjgq/jgbhcIlxuICAgICAgXCJTZWxlY3QgRW5jb2RpbmdcIjpcbiAgICAgICAgdmFsdWU6IFwi44Ko44Oz44Kz44O844OH44Kj44Oz44Kw6YG45oqeXCJcbiAgICAgIFwiR28gdG8gTGluZVwiOlxuICAgICAgICB2YWx1ZTogXCLmjIflrprooYzjgavnp7vli5VcIlxuICAgICAgXCJTZWxlY3QgR3JhbW1hclwiOlxuICAgICAgICB2YWx1ZTogXCLmlofms5XjgpLpgbjmip5cIlxuICBcIiZWaWV3XCI6XG4gICAgdmFsdWU6IFwi6KGo56S6KCZWKVwiXG4gICAgc3VibWVudTpcbiAgICAgIFwiVG9nZ2xlICZGdWxsIFNjcmVlblwiOlxuICAgICAgICB2YWx1ZTogXCLjg5Xjg6vjgrnjgq/jg6rjg7zjg7PliIfmm78oJkYpXCJcbiAgICAgIFwiVG9nZ2xlIE1lbnUgQmFyXCI6XG4gICAgICAgIHZhbHVlOiBcIuODoeODi+ODpeODvOODkOODvOWIh+abv1wiXG4gICAgICBQYW5lczpcbiAgICAgICAgdmFsdWU6IFwi44Oa44Kk44OzXCJcbiAgICAgICAgc3VibWVudTpcbiAgICAgICAgICBcIlNwbGl0IFVwXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7PliIblibIg4oaRXCJcbiAgICAgICAgICBcIlNwbGl0IERvd25cIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODmuOCpOODs+WIhuWJsiDihpNcIlxuICAgICAgICAgIFwiU3BsaXQgTGVmdFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Oa44Kk44Oz5YiG5YmyIOKGkFwiXG4gICAgICAgICAgXCJTcGxpdCBSaWdodFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Oa44Kk44Oz5YiG5YmyIOKGklwiXG4gICAgICAgICAgXCJGb2N1cyBOZXh0IFBhbmVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuasoeOBruODmuOCpOODs+OBq+ODleOCqeODvOOCq+OCuVwiXG4gICAgICAgICAgXCJGb2N1cyBQcmV2aW91cyBQYW5lXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLliY3jga7jg5rjgqTjg7Pjgavjg5Xjgqnjg7zjgqvjgrlcIlxuICAgICAgICAgIFwiRm9jdXMgUGFuZSBBYm92ZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Oa44Kk44Oz44Gr44OV44Kp44O844Kr44K5IOKGkVwiXG4gICAgICAgICAgXCJGb2N1cyBQYW5lIEJlbG93XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7Pjgavjg5Xjgqnjg7zjgqvjgrkg4oaTXCJcbiAgICAgICAgICBcIkZvY3VzIFBhbmUgT24gTGVmdFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Oa44Kk44Oz44Gr44OV44Kp44O844Kr44K5IOKGkFwiXG4gICAgICAgICAgXCJGb2N1cyBQYW5lIE9uIFJpZ2h0XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7Pjgavjg5Xjgqnjg7zjgqvjgrkg4oaSXCJcbiAgICAgICAgICBcIkNsb3NlIFBhbmVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODmuOCpOODs+OCkumWieOBmOOCi1wiXG4gICAgICBEZXZlbG9wZXI6XG4gICAgICAgIHZhbHVlOiBcIumWi+eZulwiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgXCJPcGVuIEluICZEZXYgTW9kZeKAplwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi6ZaL55m644Oi44O844OJ44Gn6ZaL44GPKCZEKS4uLlwiXG4gICAgICAgICAgXCImUmVsb2FkIFdpbmRvd1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Km44Kj44Oz44OJ44Km44Gu5YaN6Kqt44G/6L6844G/KCZSKVwiXG4gICAgICAgICAgXCJSdW4gUGFja2FnZSAmU3BlY3NcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODkeODg+OCseODvOOCuOOCueODmuODg+OCr+OCkuWun+ihjCgmUylcIlxuICAgICAgICAgIFwiVG9nZ2xlIERldmVsb3BlciAmVG9vbHNcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODh+ODmeODreODg+ODkeODvCDjg4Tjg7zjg6soJlQpXCJcbiAgICAgIFwiJkluY3JlYXNlIEZvbnQgU2l6ZVwiOlxuICAgICAgICB2YWx1ZTogXCLjg5Xjgqnjg7Pjg4jjgrXjgqTjgrrjga7mi6HlpKdcIlxuICAgICAgXCImRGVjcmVhc2UgRm9udCBTaXplXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleOCqeODs+ODiOOCteOCpOOCuuOBrue4ruWwj1wiXG4gICAgICBcIlJlJnNldCBGb250IFNpemVcIjpcbiAgICAgICAgdmFsdWU6IFwi44OV44Kp44Oz44OI44K144Kk44K644Gu44Oq44K744OD44OIXCJcbiAgICAgIFwiVG9nZ2xlIFNvZnQgJldyYXBcIjpcbiAgICAgICAgdmFsdWU6IFwi6Ieq5YuV5oqY44KK6L+U44GX44Gu5YiH5pu/KCZXKVwiXG4gICAgICBcIlRvZ2dsZSBDb21tYW5kIFBhbGV0dGVcIjpcbiAgICAgICAgdmFsdWU6IFwi44Kz44Oe44Oz44OJ44OR44Os44OD44OIXCJcbiAgICAgIFwiVG9nZ2xlIFRyZWUgVmlld1wiOlxuICAgICAgICB2YWx1ZTogXCLjg4Tjg6rjg7zjg5Pjg6Xjg7xcIlxuICBcIiZTZWxlY3Rpb25cIjpcbiAgICB2YWx1ZTogXCLpgbjmip4oJlMpXCJcbiAgICBzdWJtZW51OlxuICAgICAgXCJBZGQgU2VsZWN0aW9uICZBYm92ZVwiOlxuICAgICAgICB2YWx1ZTogXCLpgbjmip7nr4Tlm7LjgpLluoPjgZLjgosg4oaRKCZBKVwiXG4gICAgICBcIkFkZCBTZWxlY3Rpb24gJkJlbG93XCI6XG4gICAgICAgIHZhbHVlOiBcIumBuOaKnuevhOWbsuOCkuW6g+OBkuOCiyDihpMoJkIpXCJcbiAgICAgIFwiUyZwbGl0IGludG8gTGluZXNcIjpcbiAgICAgICAgdmFsdWU6IFwi6YG45oqe56+E5Zuy44KS5ZCE6KGM44Gr5YiG5Ymy44GX44Gm5ZCM5pmC5pON5L2cKCZQKVwiXG4gICAgICBcIlNpbmdsZSBTZWxlY3Rpb25cIjpcbiAgICAgICAgdmFsdWU6IFwi5ZCM5pmC5pON5L2c54q25oWL44KS6Kej6ZmkXCJcbiAgICAgIFwiU2VsZWN0IHRvICZUb3BcIjpcbiAgICAgICAgdmFsdWU6IFwi44OV44Kh44Kk44Or5YWI6aCt44G+44Gn6YG45oqeKCZUKVwiXG4gICAgICBcIlNlbGVjdCB0byBCb3R0byZtXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleOCoeOCpOODq+acq+WwvuOBvuOBp+mBuOaKnigmTSlcIlxuICAgICAgXCJTZWxlY3QgJkxpbmVcIjpcbiAgICAgICAgdmFsdWU6IFwi6KGM44KS6YG45oqeKCZMKVwiXG4gICAgICBcIlNlbGVjdCAmV29yZFwiOlxuICAgICAgICB2YWx1ZTogXCLljZjoqp7jgpLpgbjmip4oJlcpXCJcbiAgICAgIFwiU2VsZWN0IHRvIEJlZ2lubmluZyBvZiBXJm9yZFwiOlxuICAgICAgICB2YWx1ZTogXCLljZjoqp7jga7lhYjpoK3jgb7jgafpgbjmip4oJk8pXCJcbiAgICAgIFwiU2VsZWN0IHRvIEJlZ2lubmluZyBvZiBMJmluZVwiOlxuICAgICAgICB2YWx1ZTogXCLooYzpoK3jgb7jgafpgbjmip4oJkkpXCJcbiAgICAgIFwiU2VsZWN0IHRvIEZpcnN0ICZDaGFyYWN0ZXIgb2YgTGluZVwiOlxuICAgICAgICB2YWx1ZTogXCLooYzjga7mnIDliJ3jga7mloflrZfjgb7jgafpgbjmip4oJkMpXCJcbiAgICAgIFwiU2VsZWN0IHRvIEVuZCBvZiBXb3ImZFwiOlxuICAgICAgICB2YWx1ZTogXCLljZjoqp7jga7mnKvlsL7jgb7jgafpgbjmip4oJkQpXCJcbiAgICAgIFwiU2VsZWN0IHRvIEVuZCBvZiBMaW4mZVwiOlxuICAgICAgICB2YWx1ZTogXCLooYzmnKvjgb7jgafpgbjmip4oJkUpXCJcbiAgICAgIFwiU2VsZWN0IEluc2lkZSBCcmFja2V0c1wiOlxuICAgICAgICB2YWx1ZTogXCLjgqvjg4PjgrPlhoXjgpLpgbjmip5cIlxuICBcIkYmaW5kXCI6XG4gICAgdmFsdWU6IFwi5qSc57SiKCZJKVwiXG4gICAgc3VibWVudTpcbiAgICAgIFwiRmluZCBpbiBCdWZmZXJcIjpcbiAgICAgICAgdmFsdWU6IFwi5qSc57SiLi4uXCJcbiAgICAgIFwiUmVwbGFjZSBpbiBCdWZmZXJcIjpcbiAgICAgICAgdmFsdWU6IFwi572u5o+bLi4uXCJcbiAgICAgIFwiU2VsZWN0IE5leHRcIjpcbiAgICAgICAgdmFsdWU6IFwi5qyh44Gu5LiA6Ie044KC6YG45oqeXCJcbiAgICAgIFwiU2VsZWN0IEFsbFwiOlxuICAgICAgICB2YWx1ZTogXCLkuIDoh7TjgpLjgZnjgbnjgabpgbjmip5cIlxuICAgICAgXCJUb2dnbGUgRmluZCBpbiBCdWZmZXJcIjpcbiAgICAgICAgdmFsdWU6IFwi5qSc57Si44OR44ON44Or5YiH5pu/XCJcbiAgICAgIFwiRmluZCBpbiBQcm9qZWN0XCI6XG4gICAgICAgIHZhbHVlOiBcIuODl+ODreOCuOOCp+OCr+ODiOWGheaknOe0oi4uLlwiXG4gICAgICBcIlRvZ2dsZSBGaW5kIGluIFByb2plY3RcIjpcbiAgICAgICAgdmFsdWU6IFwi44OX44Ot44K444Kn44Kv44OI5YaF5qSc57Si44OR44ON44Or5YiH5pu/XCJcbiAgICAgIFwiRmluZCBBbGxcIjpcbiAgICAgICAgdmFsdWU6IFwi44GZ44G544Gm5qSc57SiXCJcbiAgICAgIFwiRmluZCBOZXh0XCI6XG4gICAgICAgIHZhbHVlOiBcIuasoeOCkuaknOe0olwiXG4gICAgICBcIkZpbmQgUHJldmlvdXNcIjpcbiAgICAgICAgdmFsdWU6IFwi5YmN44KS5qSc57SiXCJcbiAgICAgIFwiUmVwbGFjZSBOZXh0XCI6XG4gICAgICAgIHZhbHVlOiBcIuasoeOCkue9ruaPm1wiXG4gICAgICBcIlJlcGxhY2UgQWxsXCI6XG4gICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpue9ruaPm1wiXG4gICAgICBcIkNsZWFyIEhpc3RvcnlcIjpcbiAgICAgICAgdmFsdWU6IFwi5bGl5q2044KS44Kv44Oq44KiXCJcbiAgICAgIFwiRmluZCBCdWZmZXJcIjpcbiAgICAgICAgdmFsdWU6IFwi44OQ44OD44OV44Kh44KS5qSc57SiXCJcbiAgICAgIFwiRmluZCBGaWxlXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleOCoeOCpOODq+OCkuaknOe0olwiXG4gICAgICBcIkZpbmQgTW9kaWZpZWQgRmlsZVwiOlxuICAgICAgICB2YWx1ZTogXCLkv67mraPjgZXjgozjgZ/jg5XjgqHjgqTjg6vjgpLmpJzntKJcIlxuICBcIiZQYWNrYWdlc1wiOlxuICAgIHZhbHVlOiBcIuODkeODg+OCseODvOOCuCgmUClcIlxuICBcIiZIZWxwXCI6XG4gICAgdmFsdWU6IFwi44OY44Or44OXKCZIKVwiXG4gICAgc3VibWVudTpcbiAgICAgIFwiVmlldyAmVGVybXMgb2YgVXNlXCI6XG4gICAgICAgIHZhbHVlOiBcIuWIqeeUqOadoeS7tigmVClcIlxuICAgICAgXCJWaWV3ICZMaWNlbnNlXCI6XG4gICAgICAgIHZhbHVlOiBcIuODqeOCpOOCu+ODs+OCuSgmTClcIlxuICAgICAgXCImRG9jdW1lbnRhdGlvblwiOlxuICAgICAgICB2YWx1ZTogXCLjg4njgq3jg6Xjg6Hjg7Pjg4goJkQpXCJcbiAgICAgIFJvYWRtYXA6XG4gICAgICAgIHZhbHVlOiBcIuODreODvOODieODnuODg+ODl1wiXG4gICAgICBcIkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25zXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCiOOBj+OBguOCi+OBlOizquWVj1wiXG4gICAgICBcIkNvbW11bml0eSBEaXNjdXNzaW9uc1wiOlxuICAgICAgICB2YWx1ZTogXCLjgrPjg5/jg6Xjg4vjg4bjgqMg44OH44Kj44K544Kr44OD44K344On44OzXCJcbiAgICAgIFwiUmVwb3J0IElzc3VlXCI6XG4gICAgICAgIHZhbHVlOiBcIuWVj+mhjOOBruWgseWRilwiXG4gICAgICBcIlNlYXJjaCBJc3N1ZXNcIjpcbiAgICAgICAgdmFsdWU6IFwi5aCx5ZGK44GV44KM44Gm44GE44KL5ZWP6aGMXCJcbiAgICAgIFwiQWJvdXQgQXRvbVwiOlxuICAgICAgICB2YWx1ZTogXCJBdG9tIOOBq+OBpOOBhOOBplwiXG4gICAgICBcIldlbGNvbWUgR3VpZGVcIjpcbiAgICAgICAgdmFsdWU6IFwi44Km44Kn44Or44Kr44Og44Ks44Kk44OJXCJcbn1cbiJdfQ==
