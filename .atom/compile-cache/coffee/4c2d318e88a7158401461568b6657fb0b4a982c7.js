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
          "Se&ttings": {
            value: "環境設定(&T)..."
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
          "E&xit": {
            value: "終了(&X)"
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
          "Cu&t": {
            value: "カット(&T)"
          },
          "&Copy": {
            value: "コピー(&C)"
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
                value: "開発モードで開く(&D)"
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
          },
          "Toggle Tool Bar": {
            value: "ツールバー"
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
            value: "利用条件"
          },
          "View &License": {
            value: "ライセンス"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9qYXBhbmVzZS1tZW51L2RlZi9tZW51X3dpbjMyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0lBQ2pCLElBQUEsRUFDRTtNQUFBLE9BQUEsRUFDRTtRQUFBLEtBQUEsRUFBTyxVQUFQO1FBQ0EsT0FBQSxFQUNFO1VBQUEsYUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLGFBQVA7V0FERjtVQUVBLFdBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxZQUFQO1dBSEY7VUFJQSxhQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sV0FBUDtXQUxGO1VBTUEsY0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFlBQVA7V0FQRjtVQVFBLHFCQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sa0JBQVA7V0FURjtVQVVBLGdCQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sY0FBUDtZQUNBLE9BQUEsRUFDRTtjQUFBLHVCQUFBLEVBQ0U7Z0JBQUEsS0FBQSxFQUFPLGNBQVA7ZUFERjthQUZGO1dBWEY7VUFlQSxtQkFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLG9CQUFQO1dBaEJGO1VBaUJBLFdBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxhQUFQO1dBbEJGO1VBbUJBLFNBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxTQUFQO1dBcEJGO1VBcUJBLGNBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxZQUFQO1dBdEJGO1VBdUJBLFNBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxVQUFQO1dBeEJGO1VBeUJBLFdBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxVQUFQO1dBMUJGO1VBMkJBLGFBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxZQUFQO1dBNUJGO1VBNkJBLE9BQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxRQUFQO1dBOUJGO1VBK0JBLFdBQUEsRUFDRTtZQUFB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QVFBLDRCQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sU0FBUDtXQVRGO1VBVUEsdUJBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxpQkFBUDtXQVhGO1VBWUEsY0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLE9BQVA7V0FiRjtVQWNBLGVBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxXQUFQO1dBZkY7VUFnQkEsWUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFdBQVA7V0FqQkY7VUFrQkEsZUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFVBQVA7V0FuQkY7U0FGRjtPQTVSRjtLQUZlOztBQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuTWVudTpcbiAgXCImRmlsZVwiOlxuICAgIHZhbHVlOiBcIuODleOCoeOCpOODqygmRilcIlxuICAgIHN1Ym1lbnU6XG4gICAgICBcIk5ldyAmV2luZG93XCI6XG4gICAgICAgIHZhbHVlOiBcIuaWsOimj+OCpuOCpOODs+ODieOCpigmVylcIlxuICAgICAgXCImTmV3IEZpbGVcIjpcbiAgICAgICAgdmFsdWU6IFwi5paw6KaP44OV44Kh44Kk44OrKCZOKVwiXG4gICAgICBcIiZPcGVuIEZpbGXigKZcIjpcbiAgICAgICAgdmFsdWU6IFwi6ZaL44GPKCZPKS4uLlwiXG4gICAgICBcIk9wZW4gRm9sZGVy4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleOCqeODq+ODgOOCkumWi+OBjy4uLlwiXG4gICAgICBcIkFkZCBQcm9qZWN0IEZvbGRlcuKAplwiOlxuICAgICAgICB2YWx1ZTogXCLjg5fjg63jgrjjgqfjgq/jg4jjg5Xjgqnjg6vjg4DjgpLov73liqAuLi5cIlxuICAgICAgXCJSZW9wZW4gUHJvamVjdFwiOlxuICAgICAgICB2YWx1ZTogXCLjg5fjg63jgrjjgqfjgq/jg4jlsaXmrbTjgYvjgonplovjgY9cIlxuICAgICAgICBzdWJtZW51OlxuICAgICAgICAgIFwiQ2xlYXIgUHJvamVjdCBIaXN0b3J5XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5fjg63jgrjjgqfjgq/jg4jlsaXmrbTjgpLjgq/jg6rjgqJcIlxuICAgICAgXCJSZW9wZW4gTGFzdCAmSXRlbVwiOlxuICAgICAgICB2YWx1ZTogXCLmnIDlvozjgavkvb/nlKjjgZfjgZ/jg5XjgqHjgqTjg6vjgpLplovjgY8oJkkpXCJcbiAgICAgIFwiU2UmdHRpbmdzXCI6XG4gICAgICAgIHZhbHVlOiBcIueSsOWig+ioreWumigmVCkuLi5cIlxuICAgICAgXCJDb25maWfigKZcIjpcbiAgICAgICAgdmFsdWU6IFwi5YCL5Lq66Kit5a6aLi4uXCJcbiAgICAgIFwiSW5pdCBTY3JpcHTigKZcIjpcbiAgICAgICAgdmFsdWU6IFwi6LW35YuV44K544Kv44Oq44OX44OILi4uXCJcbiAgICAgIFwiS2V5bWFw4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCreODvOODnuODg+ODly4uLlwiXG4gICAgICBcIlNuaXBwZXRz4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCueODi+ODmuODg+ODiC4uLlwiXG4gICAgICBcIlN0eWxlc2hlZXTigKZcIjpcbiAgICAgICAgdmFsdWU6IFwi44K544K/44Kk44Or44K344O844OILi4uXCJcbiAgICAgIFwiJlNhdmVcIjpcbiAgICAgICAgdmFsdWU6IFwi5L+d5a2YKCZTKVwiXG4gICAgICBcIlNhdmUgJkFz4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIuWIpeWQjeOBp+S/neWtmCgmQSkuLi5cIlxuICAgICAgXCJTYXZlIEEmbGxcIjpcbiAgICAgICAgdmFsdWU6IFwi44GZ44G544Gm5L+d5a2YKCZMKVwiXG4gICAgICBcIiZDbG9zZSBUYWJcIjpcbiAgICAgICAgdmFsdWU6IFwi44K/44OW44KS6ZaJ44GY44KLKCZDKVwiXG4gICAgICBcIkNsb3NlICZQYW5lXCI6XG4gICAgICAgIHZhbHVlOiBcIuODmuOCpOODs+OCkumWieOBmOOCiygmUClcIlxuICAgICAgXCJDbG9zJmUgV2luZG93XCI6XG4gICAgICAgIHZhbHVlOiBcIuOCpuOCpOODs+ODieOCpuOCkumWieOBmOOCiygmRSlcIlxuICAgICAgXCJFJnhpdFwiOlxuICAgICAgICB2YWx1ZTogXCLntYLkuoYoJlgpXCJcbiAgICAgIFwiQ2xvc2UgQWxsIFRhYnNcIjpcbiAgICAgICAgdmFsdWU6IFwi44K/44OW44KS44GZ44G544Gm6ZaJ44GY44KLXCJcbiAgXCImRWRpdFwiOlxuICAgIHZhbHVlOiBcIue3qOmbhigmRSlcIlxuICAgIHN1Ym1lbnU6XG4gICAgICBcIiZVbmRvXCI6XG4gICAgICAgIHZhbHVlOiBcIuWPluOCiua2iOOBmSgmVSlcIlxuICAgICAgXCImUmVkb1wiOlxuICAgICAgICB2YWx1ZTogXCLjgoTjgornm7TjgZkoJlIpXCJcbiAgICAgIFwiQ3UmdFwiOlxuICAgICAgICB2YWx1ZTogXCLjgqvjg4Pjg4goJlQpXCJcbiAgICAgIFwiJkNvcHlcIjpcbiAgICAgICAgdmFsdWU6IFwi44Kz44OU44O8KCZDKVwiXG4gICAgICBcIkNvcHkgUGF0JmhcIjpcbiAgICAgICAgdmFsdWU6IFwi44OR44K544KS44Kz44OU44O8KCZIKVwiXG4gICAgICBcIiZQYXN0ZVwiOlxuICAgICAgICB2YWx1ZTogXCLjg5rjg7zjgrnjg4goJlApXCJcbiAgICAgIFwiU2VsZWN0ICZBbGxcIjpcbiAgICAgICAgdmFsdWU6IFwi44GZ44G544Gm6YG45oqeKCZBKVwiXG4gICAgICBcIiZUb2dnbGUgQ29tbWVudHNcIjpcbiAgICAgICAgdmFsdWU6IFwi44Kz44Oh44Oz44OI44Gu5YiH5pu/KCZUKVwiXG4gICAgICBMaW5lczpcbiAgICAgICAgdmFsdWU6IFwi6KGMXCJcbiAgICAgICAgc3VibWVudTpcbiAgICAgICAgICBcIiZJbmRlbnRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuOCpOODs+ODh+ODs+ODiOOCkui/veWKoCgmSSlcIlxuICAgICAgICAgIFwiJk91dGRlbnRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuOCpOODs+ODh+ODs+ODiOOCkuaIu+OBmSgmTylcIlxuICAgICAgICAgIFwiJkF1dG8gSW5kZW50XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLoh6rli5XjgqTjg7Pjg4fjg7Pjg4goJkEpXCJcbiAgICAgICAgICBcIk1vdmUgTGluZSAmVXBcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIumBuOaKnuS4reOBruihjOOCkuS4iuOBq+enu+WLlSgmVSlcIlxuICAgICAgICAgIFwiTW92ZSBMaW5lICZEb3duXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLpgbjmip7kuK3jga7ooYzjgpLkuIvjgavnp7vli5UoJkQpXCJcbiAgICAgICAgICBcIkR1JnBsaWNhdGUgTGluZXNcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuihjOOCkuikh+ijvSgmUClcIlxuICAgICAgICAgIFwiRCZlbGV0ZSBMaW5lXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLooYzjgpLliYrpmaQoJkUpXCJcbiAgICAgICAgICBcIiZKb2luIExpbmVzXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLooYzjgpLntZDlkIgoJkopXCJcbiAgICAgIENvbHVtbnM6XG4gICAgICAgIHZhbHVlOiBcIuWIl1wiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgXCJNb3ZlIFNlbGVjdGlvbiAmTGVmdFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi6YG45oqe56+E5Zuy44KS5bem44Gr56e75YuVKCZMKVwiXG4gICAgICAgICAgXCJNb3ZlIFNlbGVjdGlvbiAmUmlnaHRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIumBuOaKnuevhOWbsuOCkuWPs+OBq+enu+WLlSgmUilcIlxuICAgICAgVGV4dDpcbiAgICAgICAgdmFsdWU6IFwi44OG44Kt44K544OIXCJcbiAgICAgICAgc3VibWVudTpcbiAgICAgICAgICBcIiZVcHBlciBDYXNlXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLlpKfmloflrZfjgavlpInmj5soJlUpXCJcbiAgICAgICAgICBcIiZMb3dlciBDYXNlXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLlsI/mloflrZfjgavlpInmj5soJkwpXCJcbiAgICAgICAgICBcIkRlbGV0ZSB0byBFbmQgb2YgJldvcmRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuWNmOiqnuOBruacq+WwvuOBvuOBp+WJiumZpCgmVylcIlxuICAgICAgICAgIFwiRGVsZXRlIHRvIFByZXZpb3VzIFdvcmQgQm91bmRhcnlcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuWJjeOBruWNmOiqnuOBruWig+eVjOOBvuOBp+WJiumZpFwiXG4gICAgICAgICAgXCJEZWxldGUgdG8gTmV4dCBXb3JkIEJvdW5kYXJ5XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLmrKHjga7ljZjoqp7jga7looPnlYzjgb7jgafliYrpmaRcIlxuICAgICAgICAgIFwiJkRlbGV0ZSBMaW5lXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLooYzjgpLliYrpmaQoJkQpXCJcbiAgICAgICAgICBcIiZUcmFuc3Bvc2VcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuWJjeW+jOOCkuWFpeOCjOabv+OBiCgmVClcIlxuICAgICAgRm9sZGluZzpcbiAgICAgICAgdmFsdWU6IFwi5oqY44KK44Gf44Gf44G/XCJcbiAgICAgICAgc3VibWVudTpcbiAgICAgICAgICBcIiZGb2xkXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLmipjjgorjgZ/jgZ/jgoAoJkYpXCJcbiAgICAgICAgICBcIiZVbmZvbGRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuaKmOOCiuOBn+OBn+OBv+OCkuaIu+OBmSgmVSlcIlxuICAgICAgICAgIFwiVW5mb2xkICZBbGxcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpuOBruaKmOOCiuOBn+OBn+OBv+OCkuaIu+OBmSgmQSlcIlxuICAgICAgICAgIFwiRm9sJmQgQWxsXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjgZnjgbnjgabmipjjgorjgZ/jgZ/jgoAoJkQpXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgMVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiMeautemajuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDJcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIjLmrrXpmo7mipjjgorjgZ/jgZ/jgoBcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCAzXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCIz5q616ZqO5oqY44KK44Gf44Gf44KAXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgNFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiNOautemajuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIjXmrrXpmo7mipjjgorjgZ/jgZ/jgoBcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCA2XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCI25q616ZqO5oqY44KK44Gf44Gf44KAXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgN1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwiN+autemajuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDhcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIjjmrrXpmo7mipjjgorjgZ/jgZ/jgoBcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCA5XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCI55q616ZqO5oqY44KK44Gf44Gf44KAXCJcbiAgICAgIFwiUmVmbG93IFNlbGVjdGlvblwiOlxuICAgICAgICB2YWx1ZTogXCLpgbjmip7nr4Tlm7LjgpLjg6rjg5Xjg63jg7xcIlxuICAgICAgQm9va21hcms6XG4gICAgICAgIHZhbHVlOiBcIuODluODg+OCr+ODnuODvOOCr1wiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgXCJWaWV3IEFsbFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44GZ44G544Gm6KGo56S6XCJcbiAgICAgICAgICBcIlRvZ2dsZSBCb29rbWFya1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44OW44OD44Kv44Oe44O844Kv44Gu5YiH5pu/XCJcbiAgICAgICAgICBcIkp1bXAgdG8gTmV4dCBCb29rbWFya1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwi5qyh44Gu44OW44OD44Kv44Oe44O844Kv44G4XCJcbiAgICAgICAgICBcIkp1bXAgdG8gUHJldmlvdXMgQm9va21hcmtcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuWJjeOBruODluODg+OCr+ODnuODvOOCr+OBuFwiXG4gICAgICBcIlNlbGVjdCBFbmNvZGluZ1wiOlxuICAgICAgICB2YWx1ZTogXCLjgqjjg7PjgrPjg7zjg4fjgqPjg7PjgrDpgbjmip5cIlxuICAgICAgXCJHbyB0byBMaW5lXCI6XG4gICAgICAgIHZhbHVlOiBcIuaMh+WumuihjOOBq+enu+WLlVwiXG4gICAgICBcIlNlbGVjdCBHcmFtbWFyXCI6XG4gICAgICAgIHZhbHVlOiBcIuaWh+azleOCkumBuOaKnlwiXG4gIFwiJlZpZXdcIjpcbiAgICB2YWx1ZTogXCLooajnpLooJlYpXCJcbiAgICBzdWJtZW51OlxuICAgICAgXCJUb2dnbGUgJkZ1bGwgU2NyZWVuXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleODq+OCueOCr+ODquODvOODs+WIh+abvygmRilcIlxuICAgICAgXCJUb2dnbGUgTWVudSBCYXJcIjpcbiAgICAgICAgdmFsdWU6IFwi44Oh44OL44Ol44O844OQ44O85YiH5pu/XCJcbiAgICAgIFBhbmVzOlxuICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7NcIlxuICAgICAgICBzdWJtZW51OlxuICAgICAgICAgIFwiU3BsaXQgVXBcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODmuOCpOODs+WIhuWJsiDihpFcIlxuICAgICAgICAgIFwiU3BsaXQgRG93blwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Oa44Kk44Oz5YiG5YmyIOKGk1wiXG4gICAgICAgICAgXCJTcGxpdCBMZWZ0XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7PliIblibIg4oaQXCJcbiAgICAgICAgICBcIlNwbGl0IFJpZ2h0XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7PliIblibIg4oaSXCJcbiAgICAgICAgICBcIkZvY3VzIE5leHQgUGFuZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi5qyh44Gu44Oa44Kk44Oz44Gr44OV44Kp44O844Kr44K5XCJcbiAgICAgICAgICBcIkZvY3VzIFByZXZpb3VzIFBhbmVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuWJjeOBruODmuOCpOODs+OBq+ODleOCqeODvOOCq+OCuVwiXG4gICAgICAgICAgXCJGb2N1cyBQYW5lIEFib3ZlXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7Pjgavjg5Xjgqnjg7zjgqvjgrkg4oaRXCJcbiAgICAgICAgICBcIkZvY3VzIFBhbmUgQmVsb3dcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODmuOCpOODs+OBq+ODleOCqeODvOOCq+OCuSDihpNcIlxuICAgICAgICAgIFwiRm9jdXMgUGFuZSBPbiBMZWZ0XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7Pjgavjg5Xjgqnjg7zjgqvjgrkg4oaQXCJcbiAgICAgICAgICBcIkZvY3VzIFBhbmUgT24gUmlnaHRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODmuOCpOODs+OBq+ODleOCqeODvOOCq+OCuSDihpJcIlxuICAgICAgICAgIFwiQ2xvc2UgUGFuZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Oa44Kk44Oz44KS6ZaJ44GY44KLXCJcbiAgICAgIERldmVsb3BlcjpcbiAgICAgICAgdmFsdWU6IFwi6ZaL55m6XCJcbiAgICAgICAgc3VibWVudTpcbiAgICAgICAgICBcIk9wZW4gSW4gJkRldiBNb2Rl4oCmXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLplovnmbrjg6Ljg7zjg4njgafplovjgY8oJkQpXCJcbiAgICAgICAgICBcIiZSZWxvYWQgV2luZG93XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjgqbjgqPjg7Pjg4njgqbjga7lho3oqq3jgb/ovrzjgb8oJlIpXCJcbiAgICAgICAgICBcIlJ1biBQYWNrYWdlICZTcGVjc1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44OR44OD44Kx44O844K444K544Oa44OD44Kv44KS5a6f6KGMKCZTKVwiXG4gICAgICAgICAgXCJUb2dnbGUgRGV2ZWxvcGVyICZUb29sc1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44OH44OZ44Ot44OD44OR44O8IOODhOODvOODqygmVClcIlxuICAgICAgXCImSW5jcmVhc2UgRm9udCBTaXplXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleOCqeODs+ODiOOCteOCpOOCuuOBruaLoeWkp1wiXG4gICAgICBcIiZEZWNyZWFzZSBGb250IFNpemVcIjpcbiAgICAgICAgdmFsdWU6IFwi44OV44Kp44Oz44OI44K144Kk44K644Gu57iu5bCPXCJcbiAgICAgIFwiUmUmc2V0IEZvbnQgU2l6ZVwiOlxuICAgICAgICB2YWx1ZTogXCLjg5Xjgqnjg7Pjg4jjgrXjgqTjgrrjga7jg6rjgrvjg4Pjg4hcIlxuICAgICAgXCJUb2dnbGUgU29mdCAmV3JhcFwiOlxuICAgICAgICB2YWx1ZTogXCLoh6rli5Xmipjjgorov5TjgZfjga7liIfmm78oJlcpXCJcbiAgICAgIFwiVG9nZ2xlIENvbW1hbmQgUGFsZXR0ZVwiOlxuICAgICAgICB2YWx1ZTogXCLjgrPjg57jg7Pjg4njg5Hjg6zjg4Pjg4hcIlxuICAgICAgXCJUb2dnbGUgVHJlZSBWaWV3XCI6XG4gICAgICAgIHZhbHVlOiBcIuODhOODquODvOODk+ODpeODvFwiXG4gICAgICBcIlRvZ2dsZSBUb29sIEJhclwiOlxuICAgICAgICB2YWx1ZTogXCLjg4Tjg7zjg6vjg5Djg7xcIlxuICBcIiZTZWxlY3Rpb25cIjpcbiAgICB2YWx1ZTogXCLpgbjmip4oJlMpXCJcbiAgICBzdWJtZW51OlxuICAgICAgXCJBZGQgU2VsZWN0aW9uICZBYm92ZVwiOlxuICAgICAgICB2YWx1ZTogXCLpgbjmip7nr4Tlm7LjgpLluoPjgZLjgosg4oaRKCZBKVwiXG4gICAgICBcIkFkZCBTZWxlY3Rpb24gJkJlbG93XCI6XG4gICAgICAgIHZhbHVlOiBcIumBuOaKnuevhOWbsuOCkuW6g+OBkuOCiyDihpMoJkIpXCJcbiAgICAgIFwiUyZwbGl0IGludG8gTGluZXNcIjpcbiAgICAgICAgdmFsdWU6IFwi6YG45oqe56+E5Zuy44KS5ZCE6KGM44Gr5YiG5Ymy44GX44Gm5ZCM5pmC5pON5L2cKCZQKVwiXG4gICAgICBcIlNpbmdsZSBTZWxlY3Rpb25cIjpcbiAgICAgICAgdmFsdWU6IFwi5ZCM5pmC5pON5L2c54q25oWL44KS6Kej6ZmkXCJcbiAgICAgIFwiU2VsZWN0IHRvICZUb3BcIjpcbiAgICAgICAgdmFsdWU6IFwi44OV44Kh44Kk44Or5YWI6aCt44G+44Gn6YG45oqeKCZUKVwiXG4gICAgICBcIlNlbGVjdCB0byBCb3R0byZtXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleOCoeOCpOODq+acq+WwvuOBvuOBp+mBuOaKnigmTSlcIlxuICAgICAgXCJTZWxlY3QgJkxpbmVcIjpcbiAgICAgICAgdmFsdWU6IFwi6KGM44KS6YG45oqeKCZMKVwiXG4gICAgICBcIlNlbGVjdCAmV29yZFwiOlxuICAgICAgICB2YWx1ZTogXCLljZjoqp7jgpLpgbjmip4oJlcpXCJcbiAgICAgIFwiU2VsZWN0IHRvIEJlZ2lubmluZyBvZiBXJm9yZFwiOlxuICAgICAgICB2YWx1ZTogXCLljZjoqp7jga7lhYjpoK3jgb7jgafpgbjmip4oJk8pXCJcbiAgICAgIFwiU2VsZWN0IHRvIEJlZ2lubmluZyBvZiBMJmluZVwiOlxuICAgICAgICB2YWx1ZTogXCLooYzpoK3jgb7jgafpgbjmip4oJkkpXCJcbiAgICAgIFwiU2VsZWN0IHRvIEZpcnN0ICZDaGFyYWN0ZXIgb2YgTGluZVwiOlxuICAgICAgICB2YWx1ZTogXCLooYzjga7mnIDliJ3jga7mloflrZfjgb7jgafpgbjmip4oJkMpXCJcbiAgICAgIFwiU2VsZWN0IHRvIEVuZCBvZiBXb3ImZFwiOlxuICAgICAgICB2YWx1ZTogXCLljZjoqp7jga7mnKvlsL7jgb7jgafpgbjmip4oJkQpXCJcbiAgICAgIFwiU2VsZWN0IHRvIEVuZCBvZiBMaW4mZVwiOlxuICAgICAgICB2YWx1ZTogXCLooYzmnKvjgb7jgafpgbjmip4oJkUpXCJcbiAgICAgIFwiU2VsZWN0IEluc2lkZSBCcmFja2V0c1wiOlxuICAgICAgICB2YWx1ZTogXCLjgqvjg4PjgrPlhoXjgpLpgbjmip5cIlxuICBcIkYmaW5kXCI6XG4gICAgdmFsdWU6IFwi5qSc57SiKCZJKVwiXG4gICAgc3VibWVudTpcbiAgICAgIFwiRmluZCBpbiBCdWZmZXJcIjpcbiAgICAgICAgdmFsdWU6IFwi5qSc57SiLi4uXCJcbiAgICAgIFwiUmVwbGFjZSBpbiBCdWZmZXJcIjpcbiAgICAgICAgdmFsdWU6IFwi572u5o+bLi4uXCJcbiAgICAgIFwiU2VsZWN0IE5leHRcIjpcbiAgICAgICAgdmFsdWU6IFwi5qyh44Gu5LiA6Ie044KC6YG45oqeXCJcbiAgICAgIFwiU2VsZWN0IEFsbFwiOlxuICAgICAgICB2YWx1ZTogXCLkuIDoh7TjgpLjgZnjgbnjgabpgbjmip5cIlxuICAgICAgXCJUb2dnbGUgRmluZCBpbiBCdWZmZXJcIjpcbiAgICAgICAgdmFsdWU6IFwi5qSc57Si44OR44ON44Or5YiH5pu/XCJcbiAgICAgIFwiRmluZCBpbiBQcm9qZWN0XCI6XG4gICAgICAgIHZhbHVlOiBcIuODl+ODreOCuOOCp+OCr+ODiOWGheaknOe0oi4uLlwiXG4gICAgICBcIlRvZ2dsZSBGaW5kIGluIFByb2plY3RcIjpcbiAgICAgICAgdmFsdWU6IFwi44OX44Ot44K444Kn44Kv44OI5YaF5qSc57Si44OR44ON44Or5YiH5pu/XCJcbiAgICAgIFwiRmluZCBBbGxcIjpcbiAgICAgICAgdmFsdWU6IFwi44GZ44G544Gm5qSc57SiXCJcbiAgICAgIFwiRmluZCBOZXh0XCI6XG4gICAgICAgIHZhbHVlOiBcIuasoeOCkuaknOe0olwiXG4gICAgICBcIkZpbmQgUHJldmlvdXNcIjpcbiAgICAgICAgdmFsdWU6IFwi5YmN44KS5qSc57SiXCJcbiAgICAgIFwiUmVwbGFjZSBOZXh0XCI6XG4gICAgICAgIHZhbHVlOiBcIuasoeOCkue9ruaPm1wiXG4gICAgICBcIlJlcGxhY2UgQWxsXCI6XG4gICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpue9ruaPm1wiXG4gICAgICBcIkNsZWFyIEhpc3RvcnlcIjpcbiAgICAgICAgdmFsdWU6IFwi5bGl5q2044KS44Kv44Oq44KiXCJcbiAgICAgIFwiRmluZCBCdWZmZXJcIjpcbiAgICAgICAgdmFsdWU6IFwi44OQ44OD44OV44Kh44KS5qSc57SiXCJcbiAgICAgIFwiRmluZCBGaWxlXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleOCoeOCpOODq+OCkuaknOe0olwiXG4gICAgICBcIkZpbmQgTW9kaWZpZWQgRmlsZVwiOlxuICAgICAgICB2YWx1ZTogXCLkv67mraPjgZXjgozjgZ/jg5XjgqHjgqTjg6vjgpLmpJzntKJcIlxuICBcIiZQYWNrYWdlc1wiOlxuICAgIHZhbHVlOiBcIuODkeODg+OCseODvOOCuCgmUClcIlxuICBcIiZIZWxwXCI6XG4gICAgdmFsdWU6IFwi44OY44Or44OXKCZIKVwiXG4gICAgc3VibWVudTpcbiAgICAgIFwiVmlldyAmVGVybXMgb2YgVXNlXCI6XG4gICAgICAgIHZhbHVlOiBcIuWIqeeUqOadoeS7tlwiXG4gICAgICBcIlZpZXcgJkxpY2Vuc2VcIjpcbiAgICAgICAgdmFsdWU6IFwi44Op44Kk44K744Oz44K5XCJcbiAgICAgIFwiJkRvY3VtZW50YXRpb25cIjpcbiAgICAgICAgdmFsdWU6IFwi44OJ44Kt44Ol44Oh44Oz44OIKCZEKVwiXG4gICAgICBSb2FkbWFwOlxuICAgICAgICB2YWx1ZTogXCLjg63jg7zjg4njg57jg4Pjg5dcIlxuICAgICAgXCJGcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uc1wiOlxuICAgICAgICB2YWx1ZTogXCLjgojjgY/jgYLjgovjgZTos6rllY9cIlxuICAgICAgXCJDb21tdW5pdHkgRGlzY3Vzc2lvbnNcIjpcbiAgICAgICAgdmFsdWU6IFwi44Kz44Of44Ol44OL44OG44KjIOODh+OCo+OCueOCq+ODg+OCt+ODp+ODs1wiXG4gICAgICBcIlJlcG9ydCBJc3N1ZVwiOlxuICAgICAgICB2YWx1ZTogXCLllY/poYzjga7loLHlkYpcIlxuICAgICAgXCJTZWFyY2ggSXNzdWVzXCI6XG4gICAgICAgIHZhbHVlOiBcIuWgseWRiuOBleOCjOOBpuOBhOOCi+WVj+mhjFwiXG4gICAgICBcIkFib3V0IEF0b21cIjpcbiAgICAgICAgdmFsdWU6IFwiQXRvbSDjgavjgaTjgYTjgaZcIlxuICAgICAgXCJXZWxjb21lIEd1aWRlXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCpuOCp+ODq+OCq+ODoOOCrOOCpOODiVwiXG59XG4iXX0=
