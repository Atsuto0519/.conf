(function() {
  module.exports = {
    Menu: {
      Atom: {
        value: "Atom",
        submenu: {
          "About Atom": {
            value: "Atom について"
          },
          "View License": {
            value: "ライセンスを表示"
          },
          "Preferences…": {
            value: "環境設定..."
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
          "Install Shell Commands": {
            value: "シェルコマンドをインストール"
          },
          "Hide Atom": {
            value: "Atom を隠す"
          },
          "Hide Others": {
            value: "他を隠す"
          },
          "Show All": {
            value: "すべてを表示"
          },
          Quit: {
            value: "Atom を終了"
          }
        }
      },
      File: {
        value: "ファイル",
        submenu: {
          "New Window": {
            value: "新規ウインドウ"
          },
          "New File": {
            value: "新規ファイル"
          },
          "Open…": {
            value: "開く..."
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
          "Reopen Last Item": {
            value: "最後に使用したファイルを開く"
          },
          Save: {
            value: "保存"
          },
          "Save As…": {
            value: "別名で保存..."
          },
          "Save All": {
            value: "すべて保存"
          },
          "Close Tab": {
            value: "タブを閉じる"
          },
          "Close Pane": {
            value: "ペインを閉じる"
          },
          "Close Window": {
            value: "ウインドウを閉じる"
          },
          "Close All Tabs": {
            value: "タブをすべて閉じる"
          }
        }
      },
      Edit: {
        value: "編集",
        submenu: {
          Undo: {
            value: "取り消す"
          },
          Redo: {
            value: "やり直す"
          },
          Cut: {
            value: "カット"
          },
          Copy: {
            value: "コピー"
          },
          "Copy Path": {
            value: "パスをコピー"
          },
          Paste: {
            value: "ペースト"
          },
          "Select All": {
            value: "すべて選択"
          },
          "Toggle Comments": {
            value: "コメントの切替"
          },
          Lines: {
            value: "行",
            submenu: {
              Indent: {
                value: "インデントを追加"
              },
              Outdent: {
                value: "インデントを戻す"
              },
              "Auto Indent": {
                value: "自動インデント"
              },
              "Move Line Up": {
                value: "選択中の行を上に移動"
              },
              "Move Line Down": {
                value: "選択中の行を下に移動"
              },
              "Duplicate Lines": {
                value: "行を複製"
              },
              "Delete Line": {
                value: "行を削除"
              },
              "Join Lines": {
                value: "行を結合"
              }
            }
          },
          Columns: {
            value: "列",
            submenu: {
              "Move Selection Left": {
                value: "選択範囲を左に移動"
              },
              "Move Selection Right": {
                value: "選択範囲を右に移動"
              }
            }
          },
          Text: {
            value: "テキスト",
            submenu: {
              "Upper Case": {
                value: "大文字に変換"
              },
              "Lower Case": {
                value: "小文字に変換"
              },
              "Delete to End of Word": {
                value: "単語の末尾まで削除"
              },
              "Delete to Previous Word Boundary": {
                value: "前の単語の境界まで削除"
              },
              "Delete to Next Word Boundary": {
                value: "次の単語の境界まで削除"
              },
              "Delete Line": {
                value: "行を削除"
              },
              Transpose: {
                value: "前後を入れ替え"
              }
            }
          },
          Folding: {
            value: "折りたたみ",
            submenu: {
              Fold: {
                value: "折りたたむ"
              },
              Unfold: {
                value: "折りたたみを戻す"
              },
              "Unfold All": {
                value: "すべての折りたたみを戻す"
              },
              "Fold All": {
                value: "すべて折りたたむ"
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
      View: {
        value: "表示",
        submenu: {
          "Toggle Full Screen": {
            value: "フルスクリーン切替"
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
              "Open In Dev Mode…": {
                value: "開発モードで開く..."
              },
              "Reload Window": {
                value: "ウィンドウの再読み込み"
              },
              "Run Package Specs": {
                value: "パッケージスペックを実行"
              },
              "Run Benchmarks": {
                value: "ベンチマークを実行"
              },
              "Toggle Developer Tools": {
                value: "デベロッパー ツール"
              }
            }
          },
          "Increase Font Size": {
            value: "フォントサイズの拡大"
          },
          "Decrease Font Size": {
            value: "フォントサイズの縮小"
          },
          "Reset Font Size": {
            value: "フォントサイズのリセット"
          },
          "Toggle Soft Wrap": {
            value: "自動折り返しの切替"
          },
          "Toggle Command Palette": {
            value: "コマンドパレット"
          },
          "Toggle Tree View": {
            value: "ツリービュー"
          }
        }
      },
      Selection: {
        value: "選択",
        submenu: {
          "Add Selection Above": {
            value: "選択範囲を広げる ↑"
          },
          "Add Selection Below": {
            value: "選択範囲を広げる ↓"
          },
          "Single Selection": {
            value: "同時操作状態を解除"
          },
          "Split into Lines": {
            value: "選択範囲を各行に分割して同時操作"
          },
          "Select to Top": {
            value: "ファイル先頭まで選択"
          },
          "Select to Bottom": {
            value: "ファイル末尾まで選択"
          },
          "Select Line": {
            value: "行を選択"
          },
          "Select Word": {
            value: "単語を選択"
          },
          "Select to Beginning of Word": {
            value: "単語の先頭まで選択"
          },
          "Select to Beginning of Line": {
            value: "行頭まで選択"
          },
          "Select to First Character of Line": {
            value: "行の最初の文字まで選択"
          },
          "Select to End of Word": {
            value: "単語の末尾まで選択"
          },
          "Select to End of Line": {
            value: "行末まで選択"
          },
          "Select Inside Brackets": {
            value: "カッコ内を選択"
          }
        }
      },
      Find: {
        value: "検索",
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
      Packages: {
        value: "パッケージ"
      },
      Window: {
        value: "ウインドウ",
        submenu: {
          Minimize: {
            value: "最小化"
          },
          Zoom: {
            value: "拡大／縮小"
          },
          "Bring All to Front": {
            value: "すべてを手前に移動"
          }
        }
      },
      Help: {
        value: "ヘルプ",
        submenu: {
          "Terms of Use": {
            value: "利用条件"
          },
          Documentation: {
            value: "ドキュメント"
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
          "Welcome Guide": {
            value: "ウェルカムガイド"
          }
        }
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2hvdG1hbi8uYXRvbS9wYWNrYWdlcy9qYXBhbmVzZS1tZW51L2RlZi9tZW51X2Rhcndpbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxNQUFNLENBQUMsT0FBUCxHQUFpQjtJQUNqQixJQUFBLEVBQ0U7TUFBQSxJQUFBLEVBQ0U7UUFBQSxLQUFBLEVBQU8sTUFBUDtRQUNBLE9BQUEsRUFDRTtVQUFBLFlBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxXQUFQO1dBREY7VUFFQSxjQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sVUFBUDtXQUhGO1VBSUEsY0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFNBQVA7V0FMRjtVQU1BLFNBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxTQUFQO1dBUEY7VUFRQSxjQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sWUFBUDtXQVRGO1VBVUEsU0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFVBQVA7V0FYRjtVQVlBLFdBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxVQUFQO1dBYkY7VUFjQSxhQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sWUFBUDtXQWZGO1VBZ0JBLHdCQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sZ0JBQVA7V0FqQkY7VUFrQkEsV0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFVBQVA7V0FuQkY7VUFvQkEsYUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLE1BQVA7V0FyQkY7VUFzQkEsVUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFFBQVA7V0F2QkY7VUF3QkEsSUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFVBQVA7V0F6QkY7U0FGRjtPQURGO01BNkJBLElBQUEsRUFDRTtRQUFBLEtBQUEsRUFBTyxNQUFQO1FBQ0EsT0FBQSxFQUNFO1VBQUEsWUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFNBQVA7V0FERjtVQUVBLFVBQUEsRUFDRTtZQUFBLEtBQUEsRUFB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LEVBQ0U7UUFBQSxLQUFBLEVBQU8sT0FBUDtRQUNBLE9BQUEsRUFDRTtVQUFBLFFBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxLQUFQO1dBREY7VUFFQSxJQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sT0FBUDtXQUhGO1VBSUEsb0JBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxXQUFQO1dBTEY7U0FGRjtPQXZTRjtNQStTQSxJQUFBLEVBQ0U7UUFBQSxLQUFBLEVBQU8sS0FBUDtRQUNBLE9BQUEsRUFDRTtVQUFBLGNBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxNQUFQO1dBREY7VUFFQSxhQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sUUFBUDtXQUhGO1VBSUEsT0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFFBQVA7V0FMRjtVQU1BLDRCQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sU0FBUDtXQVBGO1VBUUEsdUJBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxpQkFBUDtXQVRGO1VBVUEsY0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLE9BQVA7V0FYRjtVQVlBLGVBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxXQUFQO1dBYkY7VUFjQSxlQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sVUFBUDtXQWZGO1NBRkY7T0FoVEY7S0FGZTs7QUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbk1lbnU6XG4gIEF0b206XG4gICAgdmFsdWU6IFwiQXRvbVwiXG4gICAgc3VibWVudTpcbiAgICAgIFwiQWJvdXQgQXRvbVwiOlxuICAgICAgICB2YWx1ZTogXCJBdG9tIOOBq+OBpOOBhOOBplwiXG4gICAgICBcIlZpZXcgTGljZW5zZVwiOlxuICAgICAgICB2YWx1ZTogXCLjg6njgqTjgrvjg7PjgrnjgpLooajnpLpcIlxuICAgICAgXCJQcmVmZXJlbmNlc+KAplwiOlxuICAgICAgICB2YWx1ZTogXCLnkrDlooPoqK3lrpouLi5cIlxuICAgICAgXCJDb25maWfigKZcIjpcbiAgICAgICAgdmFsdWU6IFwi5YCL5Lq66Kit5a6aLi4uXCJcbiAgICAgIFwiSW5pdCBTY3JpcHTigKZcIjpcbiAgICAgICAgdmFsdWU6IFwi6LW35YuV44K544Kv44Oq44OX44OILi4uXCJcbiAgICAgIFwiS2V5bWFw4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCreODvOODnuODg+ODly4uLlwiXG4gICAgICBcIlNuaXBwZXRz4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCueODi+ODmuODg+ODiC4uLlwiXG4gICAgICBcIlN0eWxlc2hlZXTigKZcIjpcbiAgICAgICAgdmFsdWU6IFwi44K544K/44Kk44Or44K344O844OILi4uXCJcbiAgICAgIFwiSW5zdGFsbCBTaGVsbCBDb21tYW5kc1wiOlxuICAgICAgICB2YWx1ZTogXCLjgrfjgqfjg6vjgrPjg57jg7Pjg4njgpLjgqTjg7Pjgrnjg4jjg7zjg6tcIlxuICAgICAgXCJIaWRlIEF0b21cIjpcbiAgICAgICAgdmFsdWU6IFwiQXRvbSDjgpLpmqDjgZlcIlxuICAgICAgXCJIaWRlIE90aGVyc1wiOlxuICAgICAgICB2YWx1ZTogXCLku5bjgpLpmqDjgZlcIlxuICAgICAgXCJTaG93IEFsbFwiOlxuICAgICAgICB2YWx1ZTogXCLjgZnjgbnjgabjgpLooajnpLpcIlxuICAgICAgUXVpdDpcbiAgICAgICAgdmFsdWU6IFwiQXRvbSDjgpLntYLkuoZcIlxuICBGaWxlOlxuICAgIHZhbHVlOiBcIuODleOCoeOCpOODq1wiXG4gICAgc3VibWVudTpcbiAgICAgIFwiTmV3IFdpbmRvd1wiOlxuICAgICAgICB2YWx1ZTogXCLmlrDopo/jgqbjgqTjg7Pjg4njgqZcIlxuICAgICAgXCJOZXcgRmlsZVwiOlxuICAgICAgICB2YWx1ZTogXCLmlrDopo/jg5XjgqHjgqTjg6tcIlxuICAgICAgXCJPcGVu4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIumWi+OBjy4uLlwiXG4gICAgICBcIkFkZCBQcm9qZWN0IEZvbGRlcuKAplwiOlxuICAgICAgICB2YWx1ZTogXCLjg5fjg63jgrjjgqfjgq/jg4jjg5Xjgqnjg6vjg4DjgpLov73liqAuLi5cIlxuICAgICAgXCJSZW9wZW4gUHJvamVjdFwiOlxuICAgICAgICB2YWx1ZTogXCLjg5fjg63jgrjjgqfjgq/jg4jlsaXmrbTjgYvjgonplovjgY9cIlxuICAgICAgICBzdWJtZW51OlxuICAgICAgICAgIFwiQ2xlYXIgUHJvamVjdCBIaXN0b3J5XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5fjg63jgrjjgqfjgq/jg4jlsaXmrbTjgpLjgq/jg6rjgqJcIlxuICAgICAgXCJSZW9wZW4gTGFzdCBJdGVtXCI6XG4gICAgICAgIHZhbHVlOiBcIuacgOW+jOOBq+S9v+eUqOOBl+OBn+ODleOCoeOCpOODq+OCkumWi+OBj1wiXG4gICAgICBTYXZlOlxuICAgICAgICB2YWx1ZTogXCLkv53lrZhcIlxuICAgICAgXCJTYXZlIEFz4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIuWIpeWQjeOBp+S/neWtmC4uLlwiXG4gICAgICBcIlNhdmUgQWxsXCI6XG4gICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpuS/neWtmFwiXG4gICAgICBcIkNsb3NlIFRhYlwiOlxuICAgICAgICB2YWx1ZTogXCLjgr/jg5bjgpLplonjgZjjgotcIlxuICAgICAgXCJDbG9zZSBQYW5lXCI6XG4gICAgICAgIHZhbHVlOiBcIuODmuOCpOODs+OCkumWieOBmOOCi1wiXG4gICAgICBcIkNsb3NlIFdpbmRvd1wiOlxuICAgICAgICB2YWx1ZTogXCLjgqbjgqTjg7Pjg4njgqbjgpLplonjgZjjgotcIlxuICAgICAgXCJDbG9zZSBBbGwgVGFic1wiOlxuICAgICAgICB2YWx1ZTogXCLjgr/jg5bjgpLjgZnjgbnjgabplonjgZjjgotcIlxuICBFZGl0OlxuICAgIHZhbHVlOiBcIue3qOmbhlwiXG4gICAgc3VibWVudTpcbiAgICAgIFVuZG86XG4gICAgICAgIHZhbHVlOiBcIuWPluOCiua2iOOBmVwiXG4gICAgICBSZWRvOlxuICAgICAgICB2YWx1ZTogXCLjgoTjgornm7TjgZlcIlxuICAgICAgQ3V0OlxuICAgICAgICB2YWx1ZTogXCLjgqvjg4Pjg4hcIlxuICAgICAgQ29weTpcbiAgICAgICAgdmFsdWU6IFwi44Kz44OU44O8XCJcbiAgICAgIFwiQ29weSBQYXRoXCI6XG4gICAgICAgIHZhbHVlOiBcIuODkeOCueOCkuOCs+ODlOODvFwiXG4gICAgICBQYXN0ZTpcbiAgICAgICAgdmFsdWU6IFwi44Oa44O844K544OIXCJcbiAgICAgIFwiU2VsZWN0IEFsbFwiOlxuICAgICAgICB2YWx1ZTogXCLjgZnjgbnjgabpgbjmip5cIlxuICAgICAgXCJUb2dnbGUgQ29tbWVudHNcIjpcbiAgICAgICAgdmFsdWU6IFwi44Kz44Oh44Oz44OI44Gu5YiH5pu/XCJcbiAgICAgIExpbmVzOlxuICAgICAgICB2YWx1ZTogXCLooYxcIlxuICAgICAgICBzdWJtZW51OlxuICAgICAgICAgIEluZGVudDpcbiAgICAgICAgICAgIHZhbHVlOiBcIuOCpOODs+ODh+ODs+ODiOOCkui/veWKoFwiXG4gICAgICAgICAgT3V0ZGVudDpcbiAgICAgICAgICAgIHZhbHVlOiBcIuOCpOODs+ODh+ODs+ODiOOCkuaIu+OBmVwiXG4gICAgICAgICAgXCJBdXRvIEluZGVudFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi6Ieq5YuV44Kk44Oz44OH44Oz44OIXCJcbiAgICAgICAgICBcIk1vdmUgTGluZSBVcFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi6YG45oqe5Lit44Gu6KGM44KS5LiK44Gr56e75YuVXCJcbiAgICAgICAgICBcIk1vdmUgTGluZSBEb3duXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLpgbjmip7kuK3jga7ooYzjgpLkuIvjgavnp7vli5VcIlxuICAgICAgICAgIFwiRHVwbGljYXRlIExpbmVzXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLooYzjgpLopIfoo71cIlxuICAgICAgICAgIFwiRGVsZXRlIExpbmVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuihjOOCkuWJiumZpFwiXG4gICAgICAgICAgXCJKb2luIExpbmVzXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLooYzjgpLntZDlkIhcIlxuICAgICAgQ29sdW1uczpcbiAgICAgICAgdmFsdWU6IFwi5YiXXCJcbiAgICAgICAgc3VibWVudTpcbiAgICAgICAgICBcIk1vdmUgU2VsZWN0aW9uIExlZnRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIumBuOaKnuevhOWbsuOCkuW3puOBq+enu+WLlVwiXG4gICAgICAgICAgXCJNb3ZlIFNlbGVjdGlvbiBSaWdodFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi6YG45oqe56+E5Zuy44KS5Y+z44Gr56e75YuVXCJcbiAgICAgIFRleHQ6XG4gICAgICAgIHZhbHVlOiBcIuODhuOCreOCueODiFwiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgXCJVcHBlciBDYXNlXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLlpKfmloflrZfjgavlpInmj5tcIlxuICAgICAgICAgIFwiTG93ZXIgQ2FzZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi5bCP5paH5a2X44Gr5aSJ5o+bXCJcbiAgICAgICAgICBcIkRlbGV0ZSB0byBFbmQgb2YgV29yZFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi5Y2Y6Kqe44Gu5pyr5bC+44G+44Gn5YmK6ZmkXCJcbiAgICAgICAgICBcIkRlbGV0ZSB0byBQcmV2aW91cyBXb3JkIEJvdW5kYXJ5XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLliY3jga7ljZjoqp7jga7looPnlYzjgb7jgafliYrpmaRcIlxuICAgICAgICAgIFwiRGVsZXRlIHRvIE5leHQgV29yZCBCb3VuZGFyeVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi5qyh44Gu5Y2Y6Kqe44Gu5aKD55WM44G+44Gn5YmK6ZmkXCJcbiAgICAgICAgICBcIkRlbGV0ZSBMaW5lXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLooYzjgpLliYrpmaRcIlxuICAgICAgICAgIFRyYW5zcG9zZTpcbiAgICAgICAgICAgIHZhbHVlOiBcIuWJjeW+jOOCkuWFpeOCjOabv+OBiFwiXG4gICAgICBGb2xkaW5nOlxuICAgICAgICB2YWx1ZTogXCLmipjjgorjgZ/jgZ/jgb9cIlxuICAgICAgICBzdWJtZW51OlxuICAgICAgICAgIEZvbGQ6XG4gICAgICAgICAgICB2YWx1ZTogXCLmipjjgorjgZ/jgZ/jgoBcIlxuICAgICAgICAgIFVuZm9sZDpcbiAgICAgICAgICAgIHZhbHVlOiBcIuaKmOOCiuOBn+OBn+OBv+OCkuaIu+OBmVwiXG4gICAgICAgICAgXCJVbmZvbGQgQWxsXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjgZnjgbnjgabjga7mipjjgorjgZ/jgZ/jgb/jgpLmiLvjgZlcIlxuICAgICAgICAgIFwiRm9sZCBBbGxcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDFcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIjHmrrXpmo7mipjjgorjgZ/jgZ/jgoBcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCAyXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCIy5q616ZqO5oqY44KK44Gf44Gf44KAXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgM1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwiM+autemajuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIjTmrrXpmo7mipjjgorjgZ/jgZ/jgoBcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCA1XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCI15q616ZqO5oqY44KK44Gf44Gf44KAXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgNlwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiNuautemajuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDdcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIjfmrrXpmo7mipjjgorjgZ/jgZ/jgoBcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCA4XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCI45q616ZqO5oqY44KK44Gf44Gf44KAXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgOVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiOeautemajuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICBcIlJlZmxvdyBTZWxlY3Rpb25cIjpcbiAgICAgICAgdmFsdWU6IFwi6YG45oqe56+E5Zuy44KS44Oq44OV44Ot44O8XCJcbiAgICAgIEJvb2ttYXJrOlxuICAgICAgICB2YWx1ZTogXCLjg5bjg4Pjgq/jg57jg7zjgq9cIlxuICAgICAgICBzdWJtZW51OlxuICAgICAgICAgIFwiVmlldyBBbGxcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpuihqOekulwiXG4gICAgICAgICAgXCJUb2dnbGUgQm9va21hcmtcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODluODg+OCr+ODnuODvOOCr+OBruWIh+abv1wiXG4gICAgICAgICAgXCJKdW1wIHRvIE5leHQgQm9va21hcmtcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuasoeOBruODluODg+OCr+ODnuODvOOCr+OBuFwiXG4gICAgICAgICAgXCJKdW1wIHRvIFByZXZpb3VzIEJvb2ttYXJrXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLliY3jga7jg5bjg4Pjgq/jg57jg7zjgq/jgbhcIlxuICAgICAgXCJTZWxlY3QgRW5jb2RpbmdcIjpcbiAgICAgICAgdmFsdWU6IFwi44Ko44Oz44Kz44O844OH44Kj44Oz44Kw6YG45oqeXCJcbiAgICAgIFwiR28gdG8gTGluZVwiOlxuICAgICAgICB2YWx1ZTogXCLmjIflrprooYzjgavnp7vli5VcIlxuICAgICAgXCJTZWxlY3QgR3JhbW1hclwiOlxuICAgICAgICB2YWx1ZTogXCLmlofms5XjgpLpgbjmip5cIlxuICBWaWV3OlxuICAgIHZhbHVlOiBcIuihqOekulwiXG4gICAgc3VibWVudTpcbiAgICAgIFwiVG9nZ2xlIEZ1bGwgU2NyZWVuXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleODq+OCueOCr+ODquODvOODs+WIh+abv1wiXG4gICAgICBQYW5lczpcbiAgICAgICAgdmFsdWU6IFwi44Oa44Kk44OzXCJcbiAgICAgICAgc3VibWVudTpcbiAgICAgICAgICBcIlNwbGl0IFVwXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7PliIblibIg4oaRXCJcbiAgICAgICAgICBcIlNwbGl0IERvd25cIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODmuOCpOODs+WIhuWJsiDihpNcIlxuICAgICAgICAgIFwiU3BsaXQgTGVmdFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Oa44Kk44Oz5YiG5YmyIOKGkFwiXG4gICAgICAgICAgXCJTcGxpdCBSaWdodFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Oa44Kk44Oz5YiG5YmyIOKGklwiXG4gICAgICAgICAgXCJGb2N1cyBOZXh0IFBhbmVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuasoeOBruODmuOCpOODs+OBq+ODleOCqeODvOOCq+OCuVwiXG4gICAgICAgICAgXCJGb2N1cyBQcmV2aW91cyBQYW5lXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLliY3jga7jg5rjgqTjg7Pjgavjg5Xjgqnjg7zjgqvjgrlcIlxuICAgICAgICAgIFwiRm9jdXMgUGFuZSBBYm92ZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Oa44Kk44Oz44Gr44OV44Kp44O844Kr44K5IOKGkVwiXG4gICAgICAgICAgXCJGb2N1cyBQYW5lIEJlbG93XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7Pjgavjg5Xjgqnjg7zjgqvjgrkg4oaTXCJcbiAgICAgICAgICBcIkZvY3VzIFBhbmUgT24gTGVmdFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Oa44Kk44Oz44Gr44OV44Kp44O844Kr44K5IOKGkFwiXG4gICAgICAgICAgXCJGb2N1cyBQYW5lIE9uIFJpZ2h0XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7Pjgavjg5Xjgqnjg7zjgqvjgrkg4oaSXCJcbiAgICAgICAgICBcIkNsb3NlIFBhbmVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODmuOCpOODs+OCkumWieOBmOOCi1wiXG4gICAgICBEZXZlbG9wZXI6XG4gICAgICAgIHZhbHVlOiBcIumWi+eZulwiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgXCJPcGVuIEluIERldiBNb2Rl4oCmXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLplovnmbrjg6Ljg7zjg4njgafplovjgY8uLi5cIlxuICAgICAgICAgIFwiUmVsb2FkIFdpbmRvd1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Km44Kj44Oz44OJ44Km44Gu5YaN6Kqt44G/6L6844G/XCJcbiAgICAgICAgICBcIlJ1biBQYWNrYWdlIFNwZWNzXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5Hjg4PjgrHjg7zjgrjjgrnjg5rjg4Pjgq/jgpLlrp/ooYxcIlxuICAgICAgICAgIFwiUnVuIEJlbmNobWFya3NcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODmeODs+ODgeODnuODvOOCr+OCkuWun+ihjFwiXG4gICAgICAgICAgXCJUb2dnbGUgRGV2ZWxvcGVyIFRvb2xzXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg4fjg5njg63jg4Pjg5Hjg7wg44OE44O844OrXCJcbiAgICAgIFwiSW5jcmVhc2UgRm9udCBTaXplXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleOCqeODs+ODiOOCteOCpOOCuuOBruaLoeWkp1wiXG4gICAgICBcIkRlY3JlYXNlIEZvbnQgU2l6ZVwiOlxuICAgICAgICB2YWx1ZTogXCLjg5Xjgqnjg7Pjg4jjgrXjgqTjgrrjga7nuK7lsI9cIlxuICAgICAgXCJSZXNldCBGb250IFNpemVcIjpcbiAgICAgICAgdmFsdWU6IFwi44OV44Kp44Oz44OI44K144Kk44K644Gu44Oq44K744OD44OIXCJcbiAgICAgIFwiVG9nZ2xlIFNvZnQgV3JhcFwiOlxuICAgICAgICB2YWx1ZTogXCLoh6rli5Xmipjjgorov5TjgZfjga7liIfmm79cIlxuICAgICAgXCJUb2dnbGUgQ29tbWFuZCBQYWxldHRlXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCs+ODnuODs+ODieODkeODrOODg+ODiFwiXG4gICAgICBcIlRvZ2dsZSBUcmVlIFZpZXdcIjpcbiAgICAgICAgdmFsdWU6IFwi44OE44Oq44O844OT44Ol44O8XCJcbiAgU2VsZWN0aW9uOlxuICAgIHZhbHVlOiBcIumBuOaKnlwiXG4gICAgc3VibWVudTpcbiAgICAgIFwiQWRkIFNlbGVjdGlvbiBBYm92ZVwiOlxuICAgICAgICB2YWx1ZTogXCLpgbjmip7nr4Tlm7LjgpLluoPjgZLjgosg4oaRXCJcbiAgICAgIFwiQWRkIFNlbGVjdGlvbiBCZWxvd1wiOlxuICAgICAgICB2YWx1ZTogXCLpgbjmip7nr4Tlm7LjgpLluoPjgZLjgosg4oaTXCJcbiAgICAgIFwiU2luZ2xlIFNlbGVjdGlvblwiOlxuICAgICAgICB2YWx1ZTogXCLlkIzmmYLmk43kvZznirbmhYvjgpLop6PpmaRcIlxuICAgICAgXCJTcGxpdCBpbnRvIExpbmVzXCI6XG4gICAgICAgIHZhbHVlOiBcIumBuOaKnuevhOWbsuOCkuWQhOihjOOBq+WIhuWJsuOBl+OBpuWQjOaZguaTjeS9nFwiXG4gICAgICBcIlNlbGVjdCB0byBUb3BcIjpcbiAgICAgICAgdmFsdWU6IFwi44OV44Kh44Kk44Or5YWI6aCt44G+44Gn6YG45oqeXCJcbiAgICAgIFwiU2VsZWN0IHRvIEJvdHRvbVwiOlxuICAgICAgICB2YWx1ZTogXCLjg5XjgqHjgqTjg6vmnKvlsL7jgb7jgafpgbjmip5cIlxuICAgICAgXCJTZWxlY3QgTGluZVwiOlxuICAgICAgICB2YWx1ZTogXCLooYzjgpLpgbjmip5cIlxuICAgICAgXCJTZWxlY3QgV29yZFwiOlxuICAgICAgICB2YWx1ZTogXCLljZjoqp7jgpLpgbjmip5cIlxuICAgICAgXCJTZWxlY3QgdG8gQmVnaW5uaW5nIG9mIFdvcmRcIjpcbiAgICAgICAgdmFsdWU6IFwi5Y2Y6Kqe44Gu5YWI6aCt44G+44Gn6YG45oqeXCJcbiAgICAgIFwiU2VsZWN0IHRvIEJlZ2lubmluZyBvZiBMaW5lXCI6XG4gICAgICAgIHZhbHVlOiBcIuihjOmgreOBvuOBp+mBuOaKnlwiXG4gICAgICBcIlNlbGVjdCB0byBGaXJzdCBDaGFyYWN0ZXIgb2YgTGluZVwiOlxuICAgICAgICB2YWx1ZTogXCLooYzjga7mnIDliJ3jga7mloflrZfjgb7jgafpgbjmip5cIlxuICAgICAgXCJTZWxlY3QgdG8gRW5kIG9mIFdvcmRcIjpcbiAgICAgICAgdmFsdWU6IFwi5Y2Y6Kqe44Gu5pyr5bC+44G+44Gn6YG45oqeXCJcbiAgICAgIFwiU2VsZWN0IHRvIEVuZCBvZiBMaW5lXCI6XG4gICAgICAgIHZhbHVlOiBcIuihjOacq+OBvuOBp+mBuOaKnlwiXG4gICAgICBcIlNlbGVjdCBJbnNpZGUgQnJhY2tldHNcIjpcbiAgICAgICAgdmFsdWU6IFwi44Kr44OD44Kz5YaF44KS6YG45oqeXCJcbiAgRmluZDpcbiAgICB2YWx1ZTogXCLmpJzntKJcIlxuICAgIHN1Ym1lbnU6XG4gICAgICBcIkZpbmQgaW4gQnVmZmVyXCI6XG4gICAgICAgIHZhbHVlOiBcIuaknOe0oi4uLlwiXG4gICAgICBcIlJlcGxhY2UgaW4gQnVmZmVyXCI6XG4gICAgICAgIHZhbHVlOiBcIue9ruaPmy4uLlwiXG4gICAgICBcIlNlbGVjdCBOZXh0XCI6XG4gICAgICAgIHZhbHVlOiBcIuasoeOBruS4gOiHtOOCgumBuOaKnlwiXG4gICAgICBcIlNlbGVjdCBBbGxcIjpcbiAgICAgICAgdmFsdWU6IFwi5LiA6Ie044KS44GZ44G544Gm6YG45oqeXCJcbiAgICAgIFwiVG9nZ2xlIEZpbmQgaW4gQnVmZmVyXCI6XG4gICAgICAgIHZhbHVlOiBcIuaknOe0ouODkeODjeODq+WIh+abv1wiXG4gICAgICBcIkZpbmQgaW4gUHJvamVjdFwiOlxuICAgICAgICB2YWx1ZTogXCLjg5fjg63jgrjjgqfjgq/jg4jlhoXmpJzntKIuLi5cIlxuICAgICAgXCJUb2dnbGUgRmluZCBpbiBQcm9qZWN0XCI6XG4gICAgICAgIHZhbHVlOiBcIuODl+ODreOCuOOCp+OCr+ODiOWGheaknOe0ouODkeODjeODq+WIh+abv1wiXG4gICAgICBcIkZpbmQgQWxsXCI6XG4gICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpuaknOe0olwiXG4gICAgICBcIkZpbmQgTmV4dFwiOlxuICAgICAgICB2YWx1ZTogXCLmrKHjgpLmpJzntKJcIlxuICAgICAgXCJGaW5kIFByZXZpb3VzXCI6XG4gICAgICAgIHZhbHVlOiBcIuWJjeOCkuaknOe0olwiXG4gICAgICBcIlJlcGxhY2UgTmV4dFwiOlxuICAgICAgICB2YWx1ZTogXCLmrKHjgpLnva7mj5tcIlxuICAgICAgXCJSZXBsYWNlIEFsbFwiOlxuICAgICAgICB2YWx1ZTogXCLjgZnjgbnjgabnva7mj5tcIlxuICAgICAgXCJDbGVhciBIaXN0b3J5XCI6XG4gICAgICAgIHZhbHVlOiBcIuWxpeattOOCkuOCr+ODquOColwiXG4gICAgICBcIkZpbmQgQnVmZmVyXCI6XG4gICAgICAgIHZhbHVlOiBcIuODkOODg+ODleOCoeOCkuaknOe0olwiXG4gICAgICBcIkZpbmQgRmlsZVwiOlxuICAgICAgICB2YWx1ZTogXCLjg5XjgqHjgqTjg6vjgpLmpJzntKJcIlxuICAgICAgXCJGaW5kIE1vZGlmaWVkIEZpbGVcIjpcbiAgICAgICAgdmFsdWU6IFwi5L+u5q2j44GV44KM44Gf44OV44Kh44Kk44Or44KS5qSc57SiXCJcbiAgUGFja2FnZXM6XG4gICAgdmFsdWU6IFwi44OR44OD44Kx44O844K4XCJcbiAgV2luZG93OlxuICAgIHZhbHVlOiBcIuOCpuOCpOODs+ODieOCplwiXG4gICAgc3VibWVudTpcbiAgICAgIE1pbmltaXplOlxuICAgICAgICB2YWx1ZTogXCLmnIDlsI/ljJZcIlxuICAgICAgWm9vbTpcbiAgICAgICAgdmFsdWU6IFwi5ouh5aSn77yP57iu5bCPXCJcbiAgICAgIFwiQnJpbmcgQWxsIHRvIEZyb250XCI6XG4gICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpuOCkuaJi+WJjeOBq+enu+WLlVwiXG4gIEhlbHA6XG4gICAgdmFsdWU6IFwi44OY44Or44OXXCJcbiAgICBzdWJtZW51OlxuICAgICAgXCJUZXJtcyBvZiBVc2VcIjpcbiAgICAgICAgdmFsdWU6IFwi5Yip55So5p2h5Lu2XCJcbiAgICAgIERvY3VtZW50YXRpb246XG4gICAgICAgIHZhbHVlOiBcIuODieOCreODpeODoeODs+ODiFwiXG4gICAgICBSb2FkbWFwOlxuICAgICAgICB2YWx1ZTogXCLjg63jg7zjg4njg57jg4Pjg5dcIlxuICAgICAgXCJGcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uc1wiOlxuICAgICAgICB2YWx1ZTogXCLjgojjgY/jgYLjgovjgZTos6rllY9cIlxuICAgICAgXCJDb21tdW5pdHkgRGlzY3Vzc2lvbnNcIjpcbiAgICAgICAgdmFsdWU6IFwi44Kz44Of44Ol44OL44OG44KjIOODh+OCo+OCueOCq+ODg+OCt+ODp+ODs1wiXG4gICAgICBcIlJlcG9ydCBJc3N1ZVwiOlxuICAgICAgICB2YWx1ZTogXCLllY/poYzjga7loLHlkYpcIlxuICAgICAgXCJTZWFyY2ggSXNzdWVzXCI6XG4gICAgICAgIHZhbHVlOiBcIuWgseWRiuOBleOCjOOBpuOBhOOCi+WVj+mhjFwiXG4gICAgICBcIldlbGNvbWUgR3VpZGVcIjpcbiAgICAgICAgdmFsdWU6IFwi44Km44Kn44Or44Kr44Og44Ks44Kk44OJXCJcbn1cbiJdfQ==
